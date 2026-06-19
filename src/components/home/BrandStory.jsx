import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="velmora-section bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#e8e4df] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="text-xs tracking-widest uppercase text-[#c9a96e] mb-4 block">Our Story</span>
            <h2
              id="brand-story-title"
              className="velmora-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight"
            >
              Where Craft Meets Consciousness
            </h2>
            <p
              id="brand-story-text"
              className="text-[#6b6b6b] leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: beautiful jewelry shouldn't cost the earth. 
              Each piece is thoughtfully designed and ethically crafted, using recycled metals and 
              conflict-free stones. We create demi-fine jewelry that feels luxurious, lasts for years, 
              and honors both the wearer and the world.
            </p>
            <p className="text-[#6b6b6b] leading-relaxed mb-8">
              From our studio to your jewelry box, every detail is considered. Because the pieces 
              you wear every day deserve to be extraordinary.
            </p>
            <Link to="/about" className="velmora-btn-outline inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
