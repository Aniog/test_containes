import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 border-t border-brand-line">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent">Our Story</p>
            <h2 className="section-title">Jewelry with intention</h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should feel effortless. We design each piece to be worn daily—light enough for the office, refined enough for evening, and always made with care.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our materials are responsibly sourced, our finishes are built to last, and our designs are made for real life.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
