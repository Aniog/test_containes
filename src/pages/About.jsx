import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-3">Est. 2018</p>
        <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Story</h1>
        <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Quiet luxury, worn every day.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] leading-relaxed space-y-6">
        <p>
          Velmora began with a simple observation: the most cherished pieces in a woman's jewelry box 
          are often the ones she reaches for daily—the delicate chain she never takes off, the earrings 
          that feel like an extension of herself.
        </p>
        <p>
          We set out to create demi-fine jewelry that bridges the gap between fine and fashion. 
          Substantial enough to feel precious. Accessible enough to become part of your everyday ritual. 
          Beautiful enough to pass down.
        </p>
        <p>
          Each piece is designed in our studio and crafted by artisans who share our belief that 
          quality should never be compromised. We use 18K gold plating over sterling silver—thick 
          enough to last, hypoallergenic for sensitive skin.
        </p>
      </div>

      <div className="my-16 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-serif text-[var(--color-gold)] mb-2">18K</div>
          <p className="text-sm uppercase tracking-widest">Gold Plating</p>
        </div>
        <div>
          <div className="text-4xl font-serif text-[var(--color-gold)] mb-2">5</div>
          <p className="text-sm uppercase tracking-widest">Signature Collections</p>
        </div>
        <div>
          <div className="text-4xl font-serif text-[var(--color-gold)] mb-2">30</div>
          <p className="text-sm uppercase tracking-widest">Day Returns</p>
        </div>
      </div>

      <div className="bg-[var(--color-bg-alt)] p-10 md:p-16 text-center">
        <h2 className="font-serif text-3xl mb-4">Crafted with Intention</h2>
        <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
          From our hands to yours. Every Velmora piece is made to be worn, loved, and remembered.
        </p>
      </div>
    </div>
  );
};

export default About;
