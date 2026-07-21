import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main className="animate-fade-in" ref={containerRef}>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] bg-muted overflow-hidden">
        <div
          data-strk-bg-id="about-hero"
          data-strk-bg="[about-heading] [about-intro]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center bg-muted"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 id="about-heading" className="text-white font-serif text-4xl md:text-6xl uppercase tracking-wider">
            Our Story
          </h1>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <p id="about-intro" className="text-lg text-foreground-muted leading-relaxed font-serif italic">
            Velmora was born from the belief that every woman deserves jewelry that feels as extraordinary as she is — every single day.
          </p>
          <div className="w-12 h-0.5 bg-accent my-8" />
          <div className="space-y-6 text-foreground-muted text-sm leading-relaxed">
            <p>We design demi-fine gold jewelry that bridges the gap between costume and fine. Each piece is meticulously crafted with 18K gold plating over brass, ensuring lasting beauty without the lasting price tag.</p>
            <p>Our founder, Amelia Chen, spent years in the fashion industry watching women save their finest jewelry for "special occasions." She believed that special shouldn't be reserved — it should be worn. In 2020, she launched Velmora with a single collection of five earring designs, each named after the women who inspired them.</p>
            <p>Today, Velmora is worn by women in over 30 countries. We remain independently owned, fiercely committed to quality, and dedicated to creating pieces that make you feel like the most beautiful version of yourself — whether you're in a boardroom, a ballroom, or your living room.</p>
          </div>
        </div>
      </div>
    </main>
  );
}