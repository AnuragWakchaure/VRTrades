'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header
      className="site-header"
      role="banner"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href="/" className="brand-container" aria-label="Vinduraj Health Trade Home">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/images/logo-transparent.webp"
            alt="Vinduraj Health Trade Logo"
            width={168}
            height={82}
            priority
            className="brand-logo-img"
          />
        </motion.div>
      </Link>
    </motion.header>
  );
}

