import React from 'react';

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-4xl text-brand-ink">Our Story</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-[4/5] rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80" alt="Velmora story" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-4 text-sm text-brand-muted leading-relaxed">
          <p>Velmora was founded with a single idea: fine jewelry should feel effortless. We design demi-fine pieces in recycled 18K gold-plated brass, with careful attention to weight, finish, and how they sit against the skin.</p>
          <p>Every piece is made in small batches, with the intention of becoming part of your everyday story. From the first sketch to the final polish, we prioritize quality materials, considered design, and packaging that feels as considered as the jewelry inside.</p>
          <p>We believe in quiet luxury—pieces that speak softly but feel significant. That’s why our collections are built around timeless silhouettes, warm metallics, and details that reward close attention.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
