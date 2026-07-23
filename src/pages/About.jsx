import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-4">Our Story</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Jewelry with intention</h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            Velmora was born from a simple belief: fine jewelry should feel accessible, responsible, and deeply personal. Every piece is designed in our London studio and crafted in small batches using recycled 18K gold-plated brass and ethically sourced crystals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <div className="aspect-[4/5] bg-base-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Designed to last</h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">
              We create quiet-luxury pieces meant to be worn daily, layered endlessly, and eventually passed down. No logos. No trends. Just timeless design.
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Our materials are chosen with care: recycled 18K gold-plated brass, hypoallergenic findings, and crystals sourced from trusted suppliers who share our commitment to ethical practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl text-accent mb-2">100%</p>
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted">Recycled Materials</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-accent mb-2">Small</p>
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted">Batch Production</p>
          </div>
          <div>
            <p className="font-serif text-4xl text-accent mb-2">30-Day</p>
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted">Hassle-Free Returns</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-primary">Shop the Collection</Link>
        </div>
      </div>
    </main>
  );
};

export default About;
