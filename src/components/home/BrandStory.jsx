import React from 'react';
import { Link } from 'react-router-dom';
const BrandStory = () => {
  return (
    <section className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] overflow-hidden" data-strk-bg-id="brand-story-img" data-strk-bg="woman wearing gold jewelry atelier crafted" data-strk-bg-ratio="4x5" data-strk-bg-width="1000">
        </div>
        <div className="flex flex-col gap-8 max-w-lg">
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Our Story: Crafted with Intention</h2>
          <p className="text-gray-500 font-sans leading-relaxed text-lg">
            VELMORA was born from a desire for jewelry that feels personal, precious, yet accessible. We believe every piece should tell a story—whether it's a gift for a loved one or a treat for yourself.
          </p>
          <p className="text-gray-500 font-sans leading-relaxed text-lg">
            Using 18K gold plating over recycled brass, our pieces are designed for longevity and timeless style, bridging the gap between fashion jewelry and fine heirlooms.
          </p>
          <div>
            <Link to="/about" className="inline-block text-black font-sans uppercase tracking-widest text-sm border-b border-black pb-2 hover:opacity-60 transition-opacity">
              Discover Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BrandStory;
