import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <Link href="/" className="brand-container" aria-label="Vinduraj Health Trade Home">
        <Image
          src="/images/logo-transparent.webp"
          alt="Vinduraj Health Trade Logo"
          width={168}
          height={82}
          priority
          className="brand-logo-img"
        />
      </Link>
    </header>
  );
}

