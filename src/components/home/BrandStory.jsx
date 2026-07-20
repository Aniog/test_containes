import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-20 md:py-0 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center px-8 py-16 md:px-16 md:py-20 bg-velmora-ivory">
            <div className="max-w-md">
              <p className="text-xs font-sans uppercase tracking-[0.2em] text-velmora-bronze mb-5">Our Story</p>
              <h2
                id="story-title"
                className="font-serif text-3xl md:text-4xl text-velmora-deep leading-tight"
              >
                Jewelry With Intention
              </h2>
              <div className="w-12 h-px bg-velmora-bronze my-6" />
              <p
                id="story-body"
                className="text-velmora-warmgray leading-relaxed font-sans text-sm md:text-base"
              >
                Velmora was born from a simple belief: fine jewelry should feel attainable. 
                We design demi-fine pieces using 18K gold plating and hypoallergenic materials, 
                crafting every detail with the same care you'd expect from heirloom-quality brands — 
                at a price that lets you collect, layer, and express yourself freely.
              </p>
              <p className="text-velmora-warmgray leading-relaxed font-sans text-sm md:text-base mt-4">
                Each piece is designed in small batches in our studio, ensuring quality and 
                reducing waste. We believe in slow fashion, thoughtful gifting, and the quiet 
                confidence of wearing something beautiful.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-8 text-xs font-sans uppercase tracking-[0.1em] text-velmora-deep hover:text-velmora-bronze transition-colors duration-300"
              >
                Discover Our Collection
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
