import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="about-hero-bg-k3l4m5"
          data-strk-bg="gold jewelry artisan crafting warm workshop"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-200 mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide">
            About Velmora
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide mb-6">
            Luxury Made Accessible
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-sans text-charcoal-500 leading-relaxed mb-6">
            Velmora Fine Jewelry was founded with a singular vision: to create beautiful, high-quality demi-fine jewelry that every woman can afford. We believe that luxury shouldn't be reserved for the few — it should be an everyday experience.
          </p>
          <p className="font-sans text-charcoal-500 leading-relaxed mb-6">
            Each piece in our collection is meticulously designed and crafted using 18K gold plating over premium sterling silver. Our jewelry is hypoallergenic, nickel-free, and built to be worn and loved every single day.
          </p>
          <p className="font-sans text-charcoal-500 leading-relaxed mb-8">
            By selling directly to you — without the traditional retail markup — we're able to offer exceptional quality at prices that make sense. Welcome to the Velmora family.
          </p>
          <Link to="/shop" className="btn-primary">
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-cream-200 border-t border-charcoal-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { title: 'Quality First', desc: 'Every piece is crafted with 18K gold plating over sterling silver, designed to last.' },
              { title: 'Direct to You', desc: 'No middlemen, no retail markup. Just beautiful jewelry at fair prices.' },
              { title: 'Kind to Skin', desc: 'All our pieces are hypoallergenic and nickel-free, perfect for sensitive skin.' },
            ].map((val) => (
              <div key={val.title}>
                <h3 className="font-serif text-xl text-charcoal tracking-wide mb-3">{val.title}</h3>
                <p className="font-sans text-sm text-charcoal-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
