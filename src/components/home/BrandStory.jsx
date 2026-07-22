import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-dark">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-velmora-gold/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <span className="text-velmora-gold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mt-4 mb-6">
              Jewelry with Purpose
            </h2>
            <div className="space-y-4 text-velmora-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We create pieces that bridge the gap between fine jewelry and fashion accessories.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio and crafted with care using ethically sourced materials. Our 18K gold-plated jewelry is made to last, becoming a treasured part of your personal story.
              </p>
              <p>
                We believe in quiet luxury—the kind that doesn't shout, but speaks volumes through quality, design, and the joy of wearing something beautiful.
              </p>
            </div>
            <Link to="/about" className="inline-block mt-8">
              <Button variant="secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;