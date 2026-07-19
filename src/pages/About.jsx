import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="section-subtitle mb-3">Our Story</p>
          <h1 className="section-title mb-5">Jewelry meant to be lived in</h1>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-5">
            Velmora was founded on a simple belief: fine jewelry should feel as good as it looks. We design demi-fine pieces in recycled 18K gold-plated brass, with hypoallergenic finishes and thoughtful details that hold up to real life.
          </p>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-8">
            Every piece is designed in our London studio and crafted by skilled artisans. We work with recycled metals and responsible suppliers because we believe luxury and sustainability belong together.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
            Shop the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;