import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velmora-stone overflow-hidden">
            <img
              alt="Velmora Brand Story"
              data-strk-img-id="velmora-brand-story-img"
              data-strk-img="Velmora Fine Jewelry craftsmanship atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-6 md:px-16 lg:px-24 py-16 md:py-0">
            <div className="max-w-md">
              <p className="text-velmora-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-espresso mb-6 leading-tight">
                Fine jewelry should be lived in, not locked away
              </h2>
              <p className="text-velmora-warm-gray text-sm leading-relaxed mb-4">
                Velmora was born from the belief that every woman deserves to feel the weight of fine craftsmanship
                without the inaccessible price. Each piece is designed in our atelier and plated in 18K gold —
                meant to be worn through morning coffee runs, boardroom meetings, and candlelit dinners.
              </p>
              <p className="text-velmora-warm-gray text-sm leading-relaxed mb-8">
                We work with ethical artisans and use nickel-free, hypoallergenic materials because
                luxury should never come at a cost to your skin or the planet.
              </p>
              <Link to="/about" className="btn-outline text-xs">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
