import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-container py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/5] overflow-hidden rounded-xl">
          <img
            src="https://placehold.co/900x1125/f6f4f0/1c1917?text=Velmora+Story&font=playfair-display"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-[#1c1917] md:text-4xl">Our Story</h2>
          <p className="mt-6 text-sm leading-relaxed text-[#5c5650] md:text-base">
            Velmora was born from a simple belief: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating, using hypoallergenic materials and thoughtful craftsmanship. Every piece is made to be worn, loved, and passed down.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#5c5650] md:text-base">
            From our studio to your jewelry box, we keep quality accessible without compromise.
          </p>
          <Link to="/about" className="mt-8 inline-block text-xs uppercase tracking-wide-custom text-[#1c1917] underline decoration-[#b8860b] underline-offset-4 hover:text-[#b8860b]">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
