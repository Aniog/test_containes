import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-ink">Our Story</h1>
          <div className="mt-6 space-y-4 text-sm md:text-base text-ink-muted leading-relaxed">
            <p>
              Velmora Fine Jewelry was founded with a simple premise: create jewelry that feels as good to wear as it looks. We design demi-fine pieces in warm 18K gold plating, with careful attention to weight, finish, and how they sit against the skin.
            </p>
            <p>
              Every piece is made in small batches, using recycled metals and hypoallergenic materials. We work with artisans who share our belief that luxury should be quiet, considered, and accessible.
            </p>
            <p>
              Designed in studio. Worn in real life.
            </p>
          </div>
          <div className="mt-8">
            <Link to="/shop">
              <Button size="lg">Shop the Collection</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
