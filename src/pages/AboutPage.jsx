import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-8 md:py-16" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h1>

          <div className="aspect-[16/9] bg-cream-dark rounded overflow-hidden mb-10">
            <img
              data-strk-img-id="about-hero"
              data-strk-img="[about-heading] [about-text-1]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-text-secondary font-sans leading-relaxed">
            <p id="about-heading" className="text-xl font-serif text-text-primary">
              Velmora was founded on a simple belief: luxury should feel personal, not inaccessible.
            </p>
            <p id="about-text-1">
              We spent years watching the jewelry industry promise quality but deliver markup. 
              Pieces that looked beautiful in the campaign but arrived hollow — in both substance and feel.
              We knew there had to be a better way.
            </p>
            <p>
              So we built one. By working directly with artisan jewelers in family-run workshops, 
              we eliminated the middlemen and created something rare: demi-fine jewelry that meets 
              fine jewelry standards, at a price that honors your intelligence.
            </p>
            <p>
              Every Velmora piece is crafted in 18K gold-plated materials, rigorously tested for 
              durability, and designed to be worn every single day. We use cubic zirconia and 
              ethically sourced materials — because beauty shouldn't come at a cost to the world 
              or your conscience.
            </p>
            <p>
              We believe jewelry is more than an accessory. It's a marker of moments, a carrier 
              of memories, a daily reminder of the woman you are becoming. Every piece is meant 
              to be treasured — not just on special occasions, but in the quiet, ordinary magic 
              of everyday life.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 py-12 border-t border-divider text-center">
            <div>
              <p className="font-serif text-3xl text-gold">2K+</p>
              <p className="text-xs text-text-secondary font-sans uppercase tracking-wider mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">4.9</p>
              <p className="text-xs text-text-secondary font-sans uppercase tracking-wider mt-1">Average Rating</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-gold">30</p>
              <p className="text-xs text-text-secondary font-sans uppercase tracking-wider mt-1">Day Returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
