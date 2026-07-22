import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-xs tracking-widest uppercase text-accent">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Designed to be Treasured</h2>
          <p className="text-sm md:text-base text-ink-secondary leading-relaxed">
            Velmora was born from a love of quiet luxury and the belief that fine jewelry should feel accessible, wearable, and deeply personal. Every piece is designed in-house and crafted from 18K gold-plated materials, with attention to detail that lasts.
          </p>
          <p className="text-sm md:text-base text-ink-secondary leading-relaxed">
            From our studio to your jewelry box, we create pieces that mark moments—big and small.
          </p>
          <Button variant="outline" asChild>
            <Link to="/about">Read Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
