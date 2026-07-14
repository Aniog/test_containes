import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Left */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-velmora-gold hidden lg:block" />
          </div>

          {/* Text Right */}
          <div>
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <div className="w-16 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-charcoal leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should be accessible, 
              and jewelry should be worn, loved, and lived in — not saved for special occasions.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              Each piece in our collection is crafted with intention, using 18K gold plating 
              and hypoallergenic materials. We create demi-fine jewelry that bridges the gap 
              between precious and wearable — quiet luxury for everyday moments.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
            >
              <span className="tracking-wider text-sm">DISCOVER MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
