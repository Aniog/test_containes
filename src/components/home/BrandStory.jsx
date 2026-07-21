import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="aspect-[3/4] bg-[#F5F0EB] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#8B7355] opacity-30 hidden lg:block" />
        </div>

        {/* Text Side */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">
              Crafted with<br />Intention
            </h2>
            <div className="w-16 h-px bg-[#8B7355] mb-8" />
          </div>

          <p className="text-[#6B5E54] leading-relaxed text-lg">
            At Velmora, we believe jewelry should be as unique as the person wearing it.
            Each piece in our collection is thoughtfully designed and meticulously crafted
            using demi-fine materials that bridge the gap between costume and fine jewelry.
          </p>

          <p className="text-[#6B5E54] leading-relaxed">
            Our 18K gold plated pieces are made to last, designed for everyday wear,
            and crafted to become part of your story. From morning coffee to evening celebrations,
            Velmora is there with you.
          </p>

          <Link
            to="/about"
            className="inline-block border-b border-[#2A2520] text-[#2A2520] pb-1 text-sm tracking-wider uppercase hover:border-[#8B7355] hover:text-[#8B7355] transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
