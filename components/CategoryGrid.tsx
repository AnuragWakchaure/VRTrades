'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'motion/react';

interface CategoryItem {
  id: string;
  nameLine1: string;
  nameLine2: string;
  title: string;
  icon: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'nurse-uniforms',
    nameLine1: 'Nurse & Hospital',
    nameLine2: 'Uniforms',
    title: 'Nurse & Hospital Uniforms',
    icon: '/icons/Red Nurse Cap Medical Icon.webp',
  },
  {
    id: 'medical-scrubs',
    nameLine1: 'Medical',
    nameLine2: 'Scrubs',
    title: 'Medical Scrubs',
    icon: '/icons/Red V-Neck Scrub Top Icon.webp',
  },
  {
    id: 'surgical-linen',
    nameLine1: 'OT &',
    nameLine2: 'Surgical Linen',
    title: 'OT & Surgical Linen',
    icon: '/icons/Stacked Surgical Linens Icon.webp',
  },
  {
    id: 'bedsheets',
    nameLine1: 'Hospital',
    nameLine2: 'Bedsheets',
    title: 'Hospital Bedsheets',
    icon: '/icons/Red Hospital Bed Icon.webp',
  },
  {
    id: 'housekeeping',
    nameLine1: 'Staff &',
    nameLine2: 'Housekeeping Uniforms',
    title: 'Staff & Housekeeping Uniforms',
    icon: '/icons/Red Uniform Shirt Icon.webp',
  },
  {
    id: 'disposables',
    nameLine1: 'Disposables &',
    nameLine2: 'Accessories',
    title: 'Disposables & Accessories',
    icon: '/icons/Red Surgical Mask Icon.webp',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface CategoryGridProps {
  onSelectCategory: (categoryTitle: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section className="categories-section" aria-label="Product Categories">
      <motion.div
        className="categories-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.id}
            className="category-card"
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            role="button"
            aria-label={cat.title}
            onClick={() => onSelectCategory(cat.title)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectCategory(cat.title);
              }
            }}
          >
            <motion.div
              className="category-icon-wrapper"
              whileHover={{ scale: 1.12, rotate: [-1, 2, 0] }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={cat.icon}
                alt={`${cat.title} Icon`}
                width={52}
                height={52}
                className="category-png-icon"
              />
            </motion.div>
            <span className="category-name">
              {cat.nameLine1}
              <br />
              {cat.nameLine2}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

