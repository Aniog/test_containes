import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-velmora-gold/10 rounded-full hidden md:block"></div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
            <div className="w-16 h-px bg-velmora-gold"></div>
            <p className="text-lg leading-relaxed text-velmora-charcoal/80">
              At Velmora, we believe jewelry should be as enduring as the moments it marks.
              Each piece is thoughtfully crafted using demi-fine materials — 18K gold plated
              over sustainable brass — designed to be worn, loved, and treasured.
            </p>
            <p className="text-lg leading-relaxed text-velmora-charcoal/80">
              From quiet mornings to grand celebrations, our pieces are made to accompany
              you through life's most precious moments.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
            >
              Discover Our Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
