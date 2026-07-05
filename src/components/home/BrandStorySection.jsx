import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="bg-[#F0EAE0]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="artisan jewelry workshop gold crafting warm editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] font-semibold mb-4">
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#2C2622] leading-[1.2] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Jewelry That Feels Like
              <br />
              an Extension of You
            </h2>
            <div className="w-12 h-px bg-[#C9A84C] mb-6" />
            <p className="text-sm text-[#6B5E52] leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury shouldn't be out of reach.
              We craft demi-fine jewelry using 18K gold plating over premium stainless
              steel — pieces that look and feel expensive, without the markup.
            </p>
            <p className="text-sm text-[#6B5E52] leading-relaxed mb-8">
              Every design is hypoallergenic, waterproof, and made to be worn daily.
              Because the best jewelry is the kind you never take off.
            </p>
            <Link
              to="/about"
              className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] font-semibold border-b border-[#C9A84C] pb-1 hover:text-[#2C2622] hover:border-[#2C2622] transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
