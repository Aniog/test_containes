import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-4 text-center">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="velmora jewelry craftsmanship artisan"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-base/75 z-[1]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs tracking-widest-2xl uppercase text-gold mb-4">About Velmora</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary font-light leading-tight mb-6">
            Our Story
          </h1>
          <p className="text-text-primary/70 text-base leading-relaxed max-w-xl mx-auto">
            Born from a passion for accessible luxury, Velmora creates demi-fine jewelry that empowers women to express their unique style every day.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 lg:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-light mb-6">
            Crafted with <span className="italic text-gold">Intention</span>
          </h2>
          <p className="text-text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
            Every Velmora piece is designed with the modern woman in mind — someone who values quality, beauty, and meaning in the things she wears. We believe jewelry should be more than an accessory; it should be a reflection of who you are.
          </p>
          <p className="text-text-muted leading-relaxed max-w-2xl mx-auto">
            Our 18K gold plating process ensures each piece has the warmth and luster of solid gold, while our commitment to hypoallergenic materials means comfort is never compromised. From the drawing board to your jewelry box, every step is guided by our dedication to craftsmanship and care.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-light text-center mb-14">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Accessible Luxury',
                text: 'Premium quality without the premium markup. We cut out the middleman to bring you fine jewelry at prices that make sense.',
              },
              {
                title: 'Conscious Craft',
                text: 'Every piece is made with responsibly sourced materials and ethical manufacturing practices. Beautiful jewelry shouldn\'t cost the earth.',
              },
              {
                title: 'Designed to Last',
                text: 'Our tarnish-resistant, hypoallergenic pieces are made to be worn daily and loved for years. Quality you can feel.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center px-4">
                <h3 className="font-serif text-xl text-gold mb-3">{value.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="py-16 sm:py-20 lg:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-light text-center mb-12">
            Shipping & Returns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded p-6 sm:p-8">
              <h3 className="font-serif text-xl text-gold mb-4">Shipping</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li>Free worldwide shipping on all orders</li>
                <li>Orders processed within 1-2 business days</li>
                <li>Standard delivery: 5-10 business days</li>
                <li>Express delivery available at checkout</li>
                <li>Tracking provided for all shipments</li>
              </ul>
            </div>
            <div className="border border-border rounded p-6 sm:p-8">
              <h3 className="font-serif text-xl text-gold mb-4">Returns</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li>30-day hassle-free return policy</li>
                <li>Items must be unworn with original packaging</li>
                <li>Free return shipping label provided</li>
                <li>Refunds processed within 5-7 business days</li>
                <li>Exchanges available for different sizes/variants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
