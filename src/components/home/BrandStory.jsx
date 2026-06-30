import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-base-cream">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-base-paper">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="lg:pl-8">
              <h2 className="font-display text-4xl md:text-5xl font-medium text-base-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-base-muted leading-relaxed">
                <p>
                  Velmora was born from a simple belief: fine jewelry should be accessible, 
                  meaningful, and made to last. Founded in 2020, we set out to create 
                  demi-fine pieces that bridge the gap between everyday wear and special occasions.
                </p>
                <p>
                  Each design is thoughtfully crafted in small batches using 18K gold-plated 
                  brass and ethically sourced crystals. We believe in quiet luxury — jewelry 
                  that speaks softly but leaves a lasting impression.
                </p>
                <p>
                  From our studio to your jewelry box, every Velmora piece is made with care, 
                  designed to be worn, loved, and passed down.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-widest uppercase text-gold hover:text-gold-dark transition-colors duration-200 group"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
