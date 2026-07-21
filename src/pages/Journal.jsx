import React from 'react';

export default function Journal() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-luxury py-16 md:py-24 text-center">
        <h1
          className="text-3xl md:text-5xl font-light mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Journal
        </h1>
        <div className="w-12 h-px bg-[#C9A96E] mx-auto mb-8" />
        <p className="text-[#8A8580]">Our stories, styling tips, and behind-the-scenes moments — coming soon.</p>
      </div>
    </div>
  );
}
