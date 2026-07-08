import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="pt-28 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-warm">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-3">Our Story</p>
            <h1 className="section-title mb-6">Jewelry with intention</h1>
            <p className="text-brand-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry should feel accessible, personal, and timeless. We design each piece to be worn daily, gifted freely, and kept forever.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              From our studio to your jewelry box, we obsess over materials, finish, and fit so you can focus on how it makes you feel.
            </p>
            <Link to="/shop" className="btn-primary">Shop the Collection</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
