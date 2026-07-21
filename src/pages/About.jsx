import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-luxury py-16 md:py-24 text-center">
        <h1
          className="text-3xl md:text-5xl font-light mb-6"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Our Story
        </h1>
        <div className="w-12 h-px bg-[#C9A96E] mx-auto mb-8" />
        <div className="max-w-2xl mx-auto text-[#8A8580] leading-relaxed space-y-4">
          <p>
            Velmora Fine Jewelry was founded with a singular vision: to create demi-fine jewelry that bridges the gap between precious and accessible.
          </p>
          <p>
            Every piece in our collection is designed in our studio, using 18K gold plating and hypoallergenic materials. We believe that luxury should be part of your everyday — not reserved for special occasions.
          </p>
          <p>
            From our studio to your jewelry box, each piece is crafted to be treasured.
          </p>
        </div>
      </div>
    </div>
  );
}
