'use client';

import React from 'react';
import Image from 'next/image';

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

interface CategoryGridProps {
  onSelectCategory: (categoryTitle: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section className="categories-section" aria-label="Product Categories">
      <div className="categories-container">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
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
            <div className="category-icon-wrapper">
              <Image
                src={cat.icon}
                alt={`${cat.title} Icon`}
                width={52}
                height={52}
                className="category-png-icon"
              />
            </div>
            <span className="category-name">
              {cat.nameLine1}
              <br />
              {cat.nameLine2}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

