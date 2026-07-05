import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="w-16 h-px bg-[#b8860b] mb-6" />
            <p className="text-[#6b6560] leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury jewelry shouldn't require a luxury budget. We design demi-fine pieces that look and feel like heirlooms, crafted with 18K gold plating over quality base metals.
            </p>
            <p className="text-[#6b6560] leading-relaxed mb-8">
              Every piece is designed in our studio with the modern woman in mind — pieces that transition effortlessly from boardroom to bar, from brunch to bedtime. Hypoallergenic, tarnish-resistant, and made to be worn every day.
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] text-xs tracking-[0.15em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
