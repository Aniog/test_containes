import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              style={{ backgroundColor: '#3d3229' }}
            />
          </div>
          <div className="max-w-lg">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-[#3d3229] tracking-wide">
              Our Story
            </h2>
            <p id="brand-story-subtitle" className="mt-4 text-[#8c7b6b] leading-relaxed">
              Velmora was born from a simple belief: fine jewelry should be accessible, meaningful, and made to last. Every piece is designed in-house and crafted from premium materials, so you can wear it every day—and pass it down.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm tracking-widest uppercase text-[#b08d57] hover:text-[#9a7a48] transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
