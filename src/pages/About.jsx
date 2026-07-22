import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/5] rounded-2xl bg-brand-warm">
            <div className="h-full w-full flex items-center justify-center text-brand-subtle text-xs tracking-widest uppercase">
              Brand Story Image
            </div>
          </div>
          <div>
            <h1 className="section-title">Our Story</h1>
            <p className="mt-6 text-brand-ink leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel within reach. We design demi-fine
              pieces in warm 18K gold plating, using responsibly sourced materials and timeless silhouettes that
              transition from day to evening.
            </p>
            <p className="mt-4 text-brand-ink leading-relaxed">
              Every piece is crafted to be worn, loved, and eventually passed down.
            </p>
            <Link to="/shop" className="btn-primary mt-8">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
