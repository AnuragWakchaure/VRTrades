import React from 'react';
import Image from 'next/image';
import { CollectionMobileRibbon } from '@/components/AnimatedRedLines';

export default function HeroSection() {
  return (
    <main className="hero-section" id="main-content">
      <div className="hero-grid">
        {/* Left: Headline & Messaging */}
        <div className="hero-left">
          <div className="hero-accent-pill" aria-hidden="true"></div>

          <h1 className="hero-title">
            <span className="title-sub">Our Website Is</span>
            <span className="title-main">
              Coming Soon
              <svg className="title-swoosh-mobile" viewBox="0 0 240 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M 4 4 C 70 14, 170 14, 236 4 C 170 10, 70 10, 4 4 Z" fill="#d3151e" />
              </svg>
            </span>
          </h1>

          <h2 className="hero-subtitle">
            Healthcare Uniforms & Textiles, Made for Every Care Environment.
          </h2>

          <p className="hero-description">
            Explore our range of hospital uniforms, medical scrubs, OT linen, hospital bedding, staff uniforms and healthcare essentials.
          </p>

          {/* Desktop Badge: "Launching Soon //" */}
          <div className="launching-badge-desktop" role="status">
            <span className="badge-text">Launching Soon</span>
            <div className="badge-slashes" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Right: Uniforms & Linens Collection Visual */}
        <div className="hero-right">
          <div className="collection-wrapper">
            <CollectionMobileRibbon />
            <Image
              src="/images/collection.webp"
              alt="Healthcare Uniforms and Linens Collection featuring scrubs, doctor lab coat, OT isolation gowns, and hospital bedding"
              width={1774}
              height={887}
              priority
              className="collection-img"
            />
          </div>

          {/* Mobile Badge: "🚀 Launching Soon" positioned below collection image matching mobile reference */}
          <div className="launching-badge-mobile" role="status">
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
          </div>
        </div>
      </div>
    </main>
  );
}

