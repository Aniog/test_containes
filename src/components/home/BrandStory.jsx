import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-velmora-warm">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-velmora-gold/30 rounded-lg hidden md:block" />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-6">
                Our Story
              </h2>
              <div className="w-24 h-px bg-velmora-gold mb-8" />
            </div>

            <div className="space-y-6 text-velmora-graphite leading-relaxed">
              <p className="text-lg">
                At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions.
                Every woman deserves to feel cherished every day.
              </p>
              <p>
                Founded with a passion for accessible luxury, we create demi-fine pieces that bridge
                the gap between costume jewelry and fine gold. Each design is thoughtfully crafted,
                using 18K gold plating and hypoallergenic materials that are gentle on sensitive skin.
              </p>
              <p>
                Our commitment to quality means every piece is built to last, developing a beautiful
                patina over time. We're not just creating jewelry; we're crafting heirlooms that
                tell your unique story.
              </p>
            </div>

            <a
              href="/about"
              className="inline-flex items-center text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
            >
              <span className="tracking-wider uppercase text-sm font-medium">
                Discover Our Journey
              </span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
