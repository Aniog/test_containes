import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-sand-light">
      <div className="max-w-7xl mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-6 lg:px-16 py-16 lg:py-0">
            <div className="max-w-md">
              <p className="text-[10px] tracking-ultra uppercase text-warm-gray mb-4">Our Story</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                Jewelry That Lives<br />With You
              </h2>
              <p className="text-sm text-warm-gray leading-relaxed mb-4">
                Velmora was born from the belief that fine jewelry should be worn every day — not locked away for special occasions. Each piece is designed in our London atelier, crafted from 18K gold-plated brass and ethically sourced crystals.
              </p>
              <p className="text-sm text-warm-gray leading-relaxed mb-8">
                We work directly with artisans to ensure every curve, every setting, and every finish meets the standard of demi-fine luxury — at a price that feels like a treat, not a splurge.
              </p>
              <Link
                to="/about"
                className="inline-block text-xs tracking-widest uppercase font-medium text-charcoal hover:text-gold-dark transition-colors underline underline-offset-8 decoration-gold/40 decoration-1"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
