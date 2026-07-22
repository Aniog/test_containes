import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="max-w-md">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-ink">Our Story</h1>
          <p className="mt-6 text-sm text-brand-muted leading-relaxed">
            Velmora was founded with a simple belief: fine jewelry should feel personal, accessible, and enduring. We design every piece in-house, using 18K gold-plated materials and thoughtfully sourced crystals.
          </p>
          <p className="mt-4 text-sm text-brand-muted leading-relaxed">
            From sketch to final polish, our process is rooted in craftsmanship and care. Each design is tested for comfort, durability, and everyday elegance — because we believe jewelry should be worn, not saved.
          </p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-accent hover:text-brand-accentHover">
            Shop the Collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
