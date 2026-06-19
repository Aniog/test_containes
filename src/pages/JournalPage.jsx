import React from 'react';
import Footer from '@/components/layout/Footer';

export default function JournalPage() {
  return (
    <main>
      <div className="pt-24 lg:pt-32 pb-16 section-padding">
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">Inspiration</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-charcoal">Journal</h1>
          <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-sm text-brand-soft-brown">Coming soon — stories of style, craftsmanship, and the women who inspire us.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
