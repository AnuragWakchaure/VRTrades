'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CollectionMobileRibbon } from '@/components/AnimatedRedLines';

export default function HeroSection() {
  return (
    <main className="hero-section" id="main-content">
      <div className="hero-grid">
        {/* Left: Headline & Messaging */}
        <div className="hero-left">
          <motion.div
            className="hero-accent-pill"
            aria-hidden="true"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="title-sub">Our Website Is</span>
            <span className="title-main">
              Coming Soon
              <svg className="title-swoosh-mobile" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M 4 4 C 70 14, 170 14, 236 4 C 170 10, 70 10, 4 4 Z" fill="#d3151e" />
              </svg>
            </span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Healthcare Uniforms & Textiles, Made for Every Care Environment.
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Explore our range of hospital uniforms, medical scrubs, OT linen, hospital bedding, staff uniforms and healthcare essentials.
          </motion.p>

          {/* Desktop Badge: "Launching Soon //" */}
          <motion.div
            className="launching-badge-desktop"
            role="status"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <span className="badge-text">Launching Soon</span>
            <div className="badge-slashes" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </div>

        {/* Right: Uniforms & Linens Collection Visual */}
        <div className="hero-right">
          <motion.div
            className="collection-wrapper"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <CollectionMobileRibbon />
            <Image
              src="/images/collection.webp"
              alt="Healthcare Uniforms and Linens Collection featuring scrubs, doctor lab coat, OT isolation gowns, and hospital bedding"
              width={1774}
              height={887}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className="collection-img"
            />
          </motion.div>

          {/* Mobile Badge: "🚀 Launching Soon" positioned below collection image matching mobile reference */}
          <motion.div
            className="launching-badge-mobile"
            role="status"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg className="burst left-burst" viewBox="0 0 24 24" fill="none" stroke="#d3151e" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="22" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="18" x2="6" y2="6"></line>
            </svg>
            
            <Image
              src="/icons/rocket-clean.webp"
              alt="Rocket Icon"
              width={22}
              height={22}
              className="rocket-img-icon"
              aria-hidden="true"
            />
            
            <span className="badge-text">Launching Soon</span>

            <svg className="burst right-burst" viewBox="0 0 24 24" fill="none" stroke="#d3151e" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18"></line>
              <line x1="2" y1="12" x2="18" y2="12"></line>
              <line x1="6" y1="18" x2="18" y2="6"></line>
            </svg>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

