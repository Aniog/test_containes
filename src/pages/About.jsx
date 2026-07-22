import React from 'react';

const About = () => {
  return (
    <div className="container py-16 md:py-20 max-w-3xl">
      <div className="mb-12">
        <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">Est. 2018</span>
        <h1 className="heading-serif text-5xl mt-2">Our Story</h1>
      </div>

      <div className="prose prose-neutral max-w-none text-[15px] leading-relaxed text-[var(--velmora-text-muted)] space-y-6">
        <p>
          Velmora began in a small studio in Lisbon, where our founder, a former fine jewelry designer, grew frustrated by the gap between mass-produced fashion jewelry and inaccessible solid gold.
        </p>
        <p>
          She set out to create pieces that felt precious enough to become heirlooms, but accessible enough to be worn every day — without worry, without ceremony.
        </p>
        <p>
          Today, every Velmora piece is still designed in that same spirit: quiet, considered, and made to last. We use 18K gold plating over solid brass, hand-selected crystals, and traditional techniques passed down through generations of artisans.
        </p>
        <p>
          We believe jewelry should tell a story — yours. Whether it's the first piece you buy for yourself, or the gift you give to mark a moment, we hope it becomes something you reach for again and again.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-[var(--velmora-border)] grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-medium mb-2">Thoughtful Design</div>
          <p className="text-[var(--velmora-text-muted)]">Every curve, every clasp, every detail is considered for comfort and longevity.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Responsible Sourcing</div>
          <p className="text-[var(--velmora-text-muted)]">We work with suppliers who share our commitment to ethical practices and traceability.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Made to Last</div>
          <p className="text-[var(--velmora-text-muted)]">Our pieces are designed to be worn daily, for years. We stand behind every one.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
