import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16" ref={pageRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Hero */}
        <div className="text-center py-16 md:py-24">
          <p className="text-gold text-xs tracking-mega-wide uppercase font-sans font-medium mb-4">
            About Velmora
          </p>
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Our Story
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-taupe text-base max-w-2xl mx-auto leading-relaxed">
            Velmora was founded with a mission to make beautiful, high-quality jewelry
            accessible to every woman. We believe that luxury should not be exclusive —
            it should be a part of your everyday life.
          </p>
        </div>

        {/* Image + text grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="aspect-[4/5] bg-cream rounded-sm overflow-hidden relative">
            <div
              data-strk-bg-id="about-story-img"
              data-strk-bg="jewelry artisan workshop gold pieces warm lighting editorial"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-sand/20">
                <span className="font-serif text-xl text-gold-muted/40 tracking-mega-wide uppercase">Our Studio</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-espresso mb-6">
              Crafted With <span className="italic text-gold-dark">Intention</span>
            </h2>
            <div className="space-y-4 text-taupe text-sm leading-relaxed">
              <p>
                Every piece in the Velmora collection starts as a sketch in our studio.
                Our designers draw inspiration from architecture, nature, and the
                incredible women who wear our jewelry.
              </p>
              <p>
                We use 18K gold plating over high-quality base metals, ensuring each piece
                has the warmth and luster of solid gold at a fraction of the price. All our
                jewelry is nickel-free and hypoallergenic, because we believe beautiful things
                should also be comfortable.
              </p>
              <p>
                Our packaging is thoughtfully designed too — every order arrives in a
                signature Velmora box, ready to gift (even if the gift is for yourself).
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-b border-sand">
          {[
            { title: 'Quality First', text: 'Every piece is crafted from premium materials and tested for durability. We never compromise on quality.' },
            { title: 'Accessible Luxury', text: 'Beautiful jewelry should not require a luxury budget. We deliver fine-jewelry aesthetics at demi-fine prices.' },
            { title: 'Sustainable Mindset', text: 'We are committed to reducing waste through thoughtful production, recyclable packaging, and lasting designs.' },
          ].map((val) => (
            <div key={val.title} className="text-center">
              <h3 className="heading-serif text-xl text-espresso mb-3">{val.title}</h3>
              <p className="text-sm text-taupe leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
