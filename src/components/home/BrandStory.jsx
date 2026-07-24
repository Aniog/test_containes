import React from "react";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] md:aspect-auto md:h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80"
            alt="Velmora jewelry craftsmanship"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=1200&q=80';
            }}
          />
        </div>
        <div className="md:pl-4">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Our Story</h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating, with careful attention to detail, wearability, and longevity. Every piece is made in small batches, with responsibly sourced materials and finishes that hold up to daily life.
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            From our studio to your jewelry box, we focus on quiet luxury—pieces that feel personal, refined, and timeless.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center text-sm font-medium text-gold-700 hover:text-gold-800"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
