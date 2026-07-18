import React from 'react';

const About = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 bg-brand-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl md:text-4xl tracking-extra-wide text-brand-charcoal">
          Our Story
        </h1>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4 mb-8" />
        <p className="text-sm md:text-base font-sans font-light text-brand-warm-gray leading-relaxed mb-6">
          Velmora was born from a simple belief: luxury should be lived in, not locked away. We craft demi-fine
          jewelry that bridges the gap between everyday wear and heirloom quality — pieces you reach for
          morning after morning, that still turn heads years later.
        </p>
        <p className="text-sm md:text-base font-sans font-light text-brand-warm-gray leading-relaxed mb-6">
          Every Velmora piece is 18K gold plated over a hypoallergenic base, designed by our studio in
          Copenhagen and brought to life by artisans who understand that true elegance lies in restraint.
          No excess. No compromise. Just beauty, built to last.
        </p>
        <p className="text-sm md:text-base font-sans font-light text-brand-warm-gray leading-relaxed">
          We ship worldwide, offer 30-day returns, and price our collections fairly — because we believe
          everyone deserves to feel the weight of something beautiful on their skin.
        </p>
      </div>
    </div>
  );
};

export default About;
