'use client';

import React from 'react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  return (
    <motion.footer
      className="site-footer"
      role="contentinfo"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ==========================================
          FOOTER CONTENT
      =========================================== */}
      <div className="footer-content-wrap">
        <div className="footer-inner">
          {/* BUSINESS ENQUIRY BUTTON */}
          <motion.button
            type="button"
            className="enquiry-button"
            onClick={onOpenEnquiry}
            aria-haspopup="dialog"
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <span>For bulk and business enquiries</span>
            <motion.span
              className="arrow"
              aria-hidden="true"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.button>

          {/* CONTACT DETAILS */}
          <div className="footer-contact-group">
            {/* EMAIL */}
            <motion.div
              className="footer-contact-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href="mailto:vrhealthtrade@gmail.com" aria-label="Send email to vrhealthtrade@gmail.com">
                vrhealthtrade@gmail.com
              </a>
            </motion.div>

            <div className="footer-divider-vert" aria-hidden="true" />

            {/* PHONE */}
            <motion.div
              className="footer-contact-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>
                <a href="tel:+918888184833" aria-label="Call +91 8888184833">+91 8888184833</a>
                &nbsp;|&nbsp;
                <a href="tel:+917385228848" aria-label="Call +91 7385228848">+91 7385228848</a>
              </span>
            </motion.div>

            <div className="footer-divider-vert" aria-hidden="true" />

            {/* LOCATION */}
            <motion.div
              className="footer-contact-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Pune, Maharashtra, India</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
