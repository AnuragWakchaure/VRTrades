'use client';

import React, { useState } from 'react';
import AnimatedRedLines from '@/components/AnimatedRedLines';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleOpenModal = (category: string = 'All Categories') => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AnimatedRedLines />
      <Header />
      <HeroSection />
      <CategoryGrid onSelectCategory={handleOpenModal} />
      <Footer onOpenEnquiry={() => handleOpenModal('All Categories')} />
      <EnquiryModal
        isOpen={isModalOpen}
        selectedCategory={selectedCategory}
        onClose={handleCloseModal}
      />
    </>
  );
}

