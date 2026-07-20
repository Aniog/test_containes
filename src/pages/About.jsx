import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">Since 2019</span>
        <h1 className="heading-serif text-5xl mt-2">Our Story</h1>
      </div>

      <div className="prose prose-neutral max-w-none text-[var(--color-text-muted)] leading-relaxed space-y-6">
        <p className="text-lg">
          Velmora was founded with a singular vision: to create demi-fine jewelry that women would 
          reach for every single day. Not pieces reserved for special occasions, but companions 
          for the quiet rituals of getting dressed, going to work, meeting friends for dinner.
        </p>

        <p>
          We believe that fine jewelry should be accessible without sacrificing quality or design integrity. 
          Our pieces are crafted from 18K gold-plated brass—chosen for its durability, hypoallergenic 
          properties, and the warm, lasting luster that only real gold can provide.
        </p>

        <p>
          Each design begins with a sketch and a question: Will this still feel right in five years? 
          In ten? We reject trends in favor of forms that feel both contemporary and timeless. 
          The result is a collection of earrings, necklaces, and huggies that become part of your 
          personal vocabulary—subtle signals of who you are.
        </p>

        <div className="py-8 border-y border-[var(--color-border)] my-8">
          <h3 className="heading-serif text-2xl text-[var(--color-text)] mb-4">Our Promise</h3>
          <ul className="space-y-2 text-sm">
            <li>• 18K gold plating over solid brass for lasting beauty</li>
            <li>• Hypoallergenic posts and findings</li>
            <li>• Ethically sourced materials</li>
            <li>• Designed in New York, crafted with care</li>
            <li>• 30-day returns, lifetime care guidance</li>
          </ul>
        </div>

        <p>
          Thank you for choosing Velmora. We hope our pieces bring you the same quiet joy 
          that went into making them.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
        <p className="text-sm text-[var(--color-text-muted)]">New York • Paris • Tokyo</p>
      </div>
    </div>
  );
}
