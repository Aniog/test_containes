import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80"
              alt="Velmora brand story"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-text">Designed for real life, worn with intention.</h2>
            <p className="mt-5 text-sm text-text-secondary leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel effortless. We source warm, demi-fine materials and finish each piece by hand so it feels luxurious from the first wear.
            </p>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              From our studio to your jewelry box, every design is made to be layered, gifted, and kept close.
            </p>
            <div className="mt-8">
              <Link to="/" className="btn-outline">Read Our Story</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
