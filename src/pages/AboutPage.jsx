import React from 'react';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main>
      <div className="pt-24 lg:pt-32 pb-16 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">About Us</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-charcoal mb-6">Our Story</h1>
          <div className="hairline-divider max-w-[60px] mx-auto mb-10" />
          <p className="text-sm text-brand-mid-brown leading-relaxed mb-6">
            Velmora was born from a simple belief: every woman deserves jewelry that feels as special as the moments she wears it in. We create demi-fine pieces that bridge the gap between costume jewelry and fine jewelry.
          </p>
          <p className="text-sm text-brand-mid-brown leading-relaxed mb-6">
            Each piece is crafted in 18K gold-plated sterling silver, designed to last, and priced to be accessible. Because luxury should be something you reach for every day.
          </p>
          <p className="text-sm text-brand-mid-brown leading-relaxed">
            Our designs draw inspiration from art, architecture, and the natural world — creating pieces that are timeless yet contemporary, statement-making yet wearable.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
