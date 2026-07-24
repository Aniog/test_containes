import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold mb-4">About Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl text-espresso mb-8">Quiet Luxury, Made Personal</h1>
        <p className="font-sans text-stone leading-relaxed mb-6">
          Velmora is a demi-fine jewelry studio crafting 18k gold-plated pieces for the modern woman.
          We believe jewelry should feel like an extension of you — effortless, warm, and intentionally designed.
        </p>
        <p className="font-sans text-stone leading-relaxed mb-10">
          Every collection is produced in small batches with responsibly sourced materials, focusing on
          longevity, comfort, and the kind of detail that gets noticed up close.
        </p>
        <Link to="/shop" className="btn-primary">Shop the Collection</Link>
      </div>
    </div>
  );
};

export default About;
