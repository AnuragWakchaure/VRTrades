'use client';

import React, { useEffect, useRef } from 'react';

export default function AnimatedRedLines() {
  const desktopRibbonRef = useRef<SVGGElement | null>(null);

  // ==========================================
  // DESKTOP MOUSE PARALLAX
  // ==========================================

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !desktopRibbonRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 900) return;

      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      currentX += (mouseX * 5 - currentX) * 0.035;
      currentY += (mouseY * 3 - currentY) * 0.035;

      if (desktopRibbonRef.current) {
        desktopRibbonRef.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    });

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="swoosh-canvas-container" aria-hidden="true">

      {/* =====================================================
          DESKTOP: LARGE SWEEPING CRIMSON RIBBON
          Styled exactly like mobileview ribbon (same gradients,
          soft pink aura, primary light beam & secondary echo swoosh)
          while preserving the desktop coordinates and trajectory.
          ===================================================== */}

      <svg
        className="swoosh-svg swoosh-desktop"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>

          {/* Crimson Gradient - Exact Mobile Style Stops & Opacity */}
          <linearGradient
            id="desktopVindurajRibbon"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A7A" stopOpacity="0.18" />
            <stop offset="48%" stopColor="#EF2A2A" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#D40000" stopOpacity="0.95" />
          </linearGradient>

          {/* Soft Pink Ambient Aura Gradient - Exact Mobile Style */}
          <linearGradient
            id="desktopVindurajSoft"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFD1D1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F25A5A" stopOpacity="0.45" />
          </linearGradient>

          {/* Moving Light Reflection Pulse - Exact Mobile Style */}
          <linearGradient
            id="desktopVindurajPulse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

        </defs>

        <g ref={desktopRibbonRef} className="desktop-ribbon-group">

          {/* Outer Soft Pink Wave - Matching Mobile Layer 1 */}
          <path
            d="
              M 560 560
              C 850 280, 1140 40, 1540 105
              C 1680 132, 1820 180, 1920 215
              L 1920 325
              C 1820 285, 1680 235, 1540 210
              C 1140 145, 850 385, 560 610
              Z
            "
            fill="url(#desktopVindurajSoft)"
            opacity="0.85"
          />

          {/* Main Sweeping Crimson Ribbon - Matching Mobile Layer 2 */}
          <path
            d="
              M 580 580
              C 860 310, 1150 70, 1540 135
              C 1680 162, 1820 210, 1920 248
              L 1920 295
              C 1820 258, 1680 210, 1540 185
              C 1150 120, 860 360, 580 595
              Z
            "
            fill="url(#desktopVindurajRibbon)"
          />

          {/* Soft Inner Highlight Stroke - Matching Mobile Layer 3 */}
          <path
            d="
              M 580 580
              C 860 310, 1150 70, 1540 135
              C 1680 162, 1820 210, 1920 248
            "
            fill="none"
            stroke="url(#desktopVindurajSoft)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Primary Traveling Light Beam - Matching Mobile Layer 4 */}
          <path
            d="
              M 580 580
              C 860 310, 1150 70, 1540 135
              C 1680 162, 1820 210, 1920 248
            "
            fill="none"
            stroke="url(#desktopVindurajPulse)"
            strokeWidth="4.5"
            strokeLinecap="round"
            className="swoosh-pulse-path"
          />

          {/* Secondary Echo Swoosh - Matching Mobile Layer 5 */}
          <path
            d="
              M 680 620
              C 960 410, 1250 170, 1640 235
              C 1760 258, 1850 290, 1920 315
            "
            fill="none"
            stroke="url(#desktopVindurajRibbon)"
            strokeWidth="4"
            opacity="0.55"
            strokeLinecap="round"
          />

          {/* Secondary Traveling Light Pulse - Matching Mobile Layer 6 */}
          <path
            d="
              M 680 620
              C 960 410, 1250 170, 1640 235
              C 1760 258, 1850 290, 1920 315
            "
            fill="none"
            stroke="url(#desktopVindurajPulse)"
            strokeWidth="4"
            strokeLinecap="round"
            className="swoosh-pulse-path-delayed"
          />

        </g>
      </svg>


      {/* =====================================================
          MOBILE: ORIGINAL VINDURAJ TOP-RIGHT CURVED WAVE
          ===================================================== */}

      <svg
        viewBox="0 0 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="swoosh-svg swoosh-mobile"
        preserveAspectRatio="none"
      >

        <defs>

          {/* Exact original mobile wave gradient */}

          <linearGradient
            id="mobileTopWaveGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A7A" stopOpacity="0.18" />
            <stop offset="48%" stopColor="#EF2A2A" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#D40000" stopOpacity="0.95" />
          </linearGradient>

          {/* Original soft pink gradient */}

          <linearGradient
            id="mobileTopWaveSoft"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFD1D1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F25A5A" stopOpacity="0.45" />
          </linearGradient>

          {/* Subtle reflection */}

          <linearGradient
            id="mobileTopWavePulse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

        </defs>

        <g className="mobile-top-ribbon">

          {/* Outer soft pink wave */}

          <path
            d="M40 0 C155 10 265 65 360 170 V0 H40 Z"
            fill="url(#mobileTopWaveSoft)"
          />

          {/* Main crimson ribbon */}

          <path
            d="M95 0 C205 18 292 70 360 142 V72 C295 28 220 4 140 0 H95 Z"
            fill="url(#mobileTopWaveGrad)"
          />

          {/* Subtle animated highlight */}

          <path
            d="M95 0 C205 18 292 70 360 142"
            fill="none"
            stroke="url(#mobileTopWavePulse)"
            strokeWidth="3"
            className="swoosh-pulse-path"
          />

        </g>

      </svg>

    </div>
  );
}

// =========================================================================
// MOBILE: RIBBONS TRAVELING BEHIND PRODUCT COLLECTION IMAGE
// Matches the visual style, gradients, and animated pulse of the top ribbon
// =========================================================================

export function CollectionMobileRibbon() {
  return (
    <div className="collection-ribbon-backdrop" aria-hidden="true">
      <svg
        viewBox="0 0 540 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="collection-ribbon-svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Main crimson gradient */}
          <linearGradient
            id="mobileCollWaveGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF7A7A" stopOpacity="0.18" />
            <stop offset="48%" stopColor="#EF2A2A" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#D40000" stopOpacity="0.95" />
          </linearGradient>

          {/* Soft pink ambient gradient */}
          <linearGradient
            id="mobileCollWaveSoft"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFD1D1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F25A5A" stopOpacity="0.45" />
          </linearGradient>

          {/* Flowing light reflection beam */}
          <linearGradient
            id="mobileCollWavePulse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="mobile-collection-ribbon-group">
          {/* Outer soft pink wave */}
          <path
            d="
              M -30 195
              C 80 145, 170 85, 275 95
              C 375 105, 455 145, 570 100
              L 570 140
              C 455 185, 375 145, 275 135
              C 170 125, 80 185, -30 235
              Z
            "
            fill="url(#mobileCollWaveSoft)"
            opacity="0.85"
          />

          {/* Main crimson ribbon */}
          <path
            d="
              M -30 180
              C 85 130, 175 72, 280 82
              C 375 92, 455 132, 570 90
              L 570 106
              C 455 148, 375 108, 280 98
              C 175 88, 85 146, -30 196
              Z
            "
            fill="url(#mobileCollWaveGrad)"
          />

          {/* Soft inner highlight */}
          <path
            d="M -30 180 C 85 130, 175 72, 280 82 C 375 92, 455 132, 570 90"
            fill="none"
            stroke="url(#mobileCollWaveSoft)"
            strokeWidth="3.5"
            opacity="0.7"
          />

          {/* Primary animated traveling light beam */}
          <path
            d="M -30 180 C 85 130, 175 72, 280 82 C 375 92, 455 132, 570 90"
            fill="none"
            stroke="url(#mobileCollWavePulse)"
            strokeWidth="4"
            strokeLinecap="round"
            className="swoosh-pulse-path"
          />

          {/* Secondary lower echo swoosh */}
          <path
            d="
              M 40 230
              C 140 180, 240 140, 350 155
              C 420 165, 490 195, 560 175
            "
            fill="none"
            stroke="url(#mobileCollWaveGrad)"
            strokeWidth="3.5"
            opacity="0.55"
            strokeLinecap="round"
          />

          {/* Secondary traveling light pulse */}
          <path
            d="
              M 40 230
              C 140 180, 240 140, 350 155
              C 420 165, 490 195, 560 175
            "
            fill="none"
            stroke="url(#mobileCollWavePulse)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="swoosh-pulse-path-delayed"
          />
        </g>
      </svg>
    </div>
  );
}
