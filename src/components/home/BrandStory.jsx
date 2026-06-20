import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative h-[400px] overflow-hidden rounded-2xl md:h-[560px]">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our Story</p>
          <h2 className="section-title">Jewelry with soul, made for real life.</h2>
          <p className="text-base leading-relaxed text-base-600">
            Velmora was born from a simple belief: fine jewelry should be part of your everyday story. We design demi-fine pieces that blend heirloom craftsmanship with modern sensibility — so you can feel polished, confident, and truly yourself.
          </p>
          <p className="text-base leading-relaxed text-base-600">
            Every piece is crafted with 18K gold plating over hypoallergenic brass, designed in California, and made to be worn, loved, and passed down.
          </p>
          <Link to="/about" className="btn-outline inline-flex">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
