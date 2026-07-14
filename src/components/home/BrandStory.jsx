import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-3">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
            Designed for real life. Made to last.
          </h2>
          <p className="mt-5 text-sm text-muted leading-relaxed">
            Velmora was founded on a simple belief: fine jewelry should feel effortless. We source
            responsibly plated metals and hand-set crystals to create pieces that transition from
            morning meetings to evening gatherings without missing a beat.
          </p>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Every design is made in small batches, with attention to finish, weight, and how it
            feels next to the skin. The result is jewelry that looks expensive, wears comfortably,
            and holds its beauty over time.
          </p>
          <div className="mt-8">
            <Link to="/about">
              <Button variant="outline">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
