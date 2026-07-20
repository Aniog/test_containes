import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-g7h8i9"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 id="about-hero-title" className="serif-heading text-4xl md:text-5xl lg:text-6xl mb-4">Our Story</h1>
          <p id="about-hero-subtitle" className="text-lg text-white/80 max-w-xl mx-auto">Where craft meets consciousness</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-stone mx-auto">
          <p className="serif-heading text-2xl md:text-3xl text-stone-800 mb-8 text-center leading-relaxed">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't come at the cost of the earth or your wallet.
          </p>
          
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          
          <p className="text-stone-600 leading-relaxed mb-6">
            Founded in 2024, we set out to create demi-fine jewelry that bridges the gap between fast fashion and luxury. Our pieces are crafted with 18K gold plating over responsibly sourced brass, designed to be worn every day and treasured for years.
          </p>
          
          <p className="text-stone-600 leading-relaxed mb-6">
            Each design begins in our studio, where our team balances timeless elegance with contemporary style. We believe in quiet luxury — jewelry that speaks softly but leaves a lasting impression.
          </p>
          
          <p className="text-stone-600 leading-relaxed mb-6">
            Our commitment to sustainability means we use recycled packaging, minimize waste in our production process, and partner with manufacturers who share our values of ethical labor practices.
          </p>
          
          <p className="text-stone-600 leading-relaxed mb-12">
            Every piece that leaves our studio is inspected for quality and presented in our signature gift box — because we believe the unboxing experience should be as special as the jewelry itself.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="serif-heading text-4xl text-primary mb-2">18K</p>
              <p className="text-sm text-stone-600 uppercase tracking-wider">Gold Plated</p>
            </div>
            <div>
              <p className="serif-heading text-4xl text-primary mb-2">100%</p>
              <p className="text-sm text-stone-600 uppercase tracking-wider">Hypoallergenic</p>
            </div>
            <div>
              <p className="serif-heading text-4xl text-primary mb-2">30</p>
              <p className="text-sm text-stone-600 uppercase tracking-wider">Day Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
