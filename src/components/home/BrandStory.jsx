import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src="https://image.pollinations.ai/prompt/woman%20hands%20making%20gold%20jewelry%20craftsmanship%20workshop%20warm%20light%20editorial?width=800&height=1000&nologo=true"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center px-6 py-16 md:px-16 md:py-20 bg-white">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                Jewelry That Feels Like Home
              </h2>
              <p className="mt-5 text-stone-600 leading-relaxed text-sm">
                Velmora was born from a simple belief: luxury should feel personal, not distant. 
                Every piece in our collection is designed in-house and crafted with 18K gold plating 
                over premium base metals — so you get the weight, warmth, and glow of fine jewelry 
                at a price that invites everyday wear.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                We work with small ateliers who share our obsession for detail. From the first sketch 
                to the final polish, each design is touched by hands that care.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-widest text-velmora-dark hover:text-velmora-gold transition-colors"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
