import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 w-full aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry craftsmanship hands gold detail"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt="Brand Story"
            />
          </div>
          <div className="flex-1 max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-6 font-bold">The Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              Meaningful pieces, <br />made for daily life.
            </h3>
            <p className="text-muted-foreground leading-loose text-lg mb-10 italic">
              "At Velmora, we believe jewelry is more than an accessory—it's an artifact of your journey. Each piece is meticulously crafted in 18K gold vermeil, blending timeless elegance with the resilience needed for modern living."
            </p>
            <Link
              to="/about"
              className="inline-block border-b-2 border-primary pb-2 uppercase tracking-[0.2em] text-xs font-bold hover:text-accent hover:border-accent transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
