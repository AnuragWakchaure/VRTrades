'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EnquiryModalProps {
  isOpen: boolean;
  selectedCategory: string;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, selectedCategory, onClose }: EnquiryModalProps) {
  const [category, setCategory] = useState(selectedCategory || 'All Categories');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    hospital: '',
    phone: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('vht_enquiries') || '[]');
      existing.push({ ...formData, category, submittedAt: new Date().toISOString() });
      localStorage.setItem('vht_enquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop is-open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="modal-window"
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          >
            <motion.button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              whileHover={{ rotate: 90, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.button>

            {!submitted ? (
              <>
                <div className="modal-header">
                  <span className="modal-badge">B2B & Institutional Orders</span>
                  <h2 className="modal-title" id="modalTitle">Direct Bulk Enquiry</h2>
                  <p className="modal-subtitle">
                    Connect with Vinduraj Health Trade for wholesale pricing, custom uniform tailoring, and sample requests.
                  </p>
                </div>

                <form className="enquiry-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="contactName" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="contactName"
                      required
                      className="form-input"
                      placeholder="e.g. Dr. Rajesh Sharma / Procurement Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="hospitalName" className="form-label">Hospital / Clinic / Organization *</label>
                    <input
                      type="text"
                      id="hospitalName"
                      required
                      className="form-input"
                      placeholder="e.g. Apex Multispeciality Hospital, Pune"
                      value={formData.hospital}
                      onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className="form-group">
                      <label htmlFor="contactPhone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="contactPhone"
                        required
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactEmail" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="contactEmail"
                        className="form-input"
                        placeholder="procurement@hospital.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="productCategory" className="form-label">Interested Products</label>
                    <select
                      id="productCategory"
                      className="form-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="All Categories">All Range / General Enquiry</option>
                      <option value="Nurse & Hospital Uniforms">Nurse & Hospital Uniforms</option>
                      <option value="Medical Scrubs">Medical Scrubs & Doctor Coats</option>
                      <option value="OT & Surgical Linen">OT Linen & Drapes</option>
                      <option value="Hospital Bedsheets">Hospital Bed Linens & Solapur Sheets</option>
                      <option value="Staff & Housekeeping Uniforms">Staff, Security & Housekeeping Uniforms</option>
                      <option value="Disposables & Accessories">Disposables (Caps, Masks, Shoe Covers, PPE)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiryMessage" className="form-label">Requirements / Estimated Quantity</label>
                    <textarea
                      id="enquiryMessage"
                      className="form-textarea"
                      placeholder="Describe your quantity (e.g. 100 scrub sets, 200 bedsheets) or custom fabric/logo requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="modal-btn-row">
                    <motion.button
                      type="submit"
                      className="btn-submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Enquiry
                    </motion.button>
                    <motion.a
                      href={`https://wa.me/918888184833?text=${encodeURIComponent(
                        `Hi, I would like to enquire about bulk healthcare uniforms and linens (${category}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      aria-label="Chat on WhatsApp"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>WhatsApp</span>
                    </motion.a>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                className="form-success-message"
                style={{ display: 'block' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon">✓</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Enquiry Received!</h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
                  Thank you for reaching out to <strong>Vinduraj Health Trade</strong>. Our representative will contact you with product catalogs and custom bulk quotes within 24 hours.
                </p>
                <motion.button
                  type="button"
                  className="btn-submit"
                  onClick={onClose}
                  style={{ width: 'auto', padding: '10px 24px' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Close
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

