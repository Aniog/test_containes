import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:min-h-[600px] bg-charcoal overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop"
            alt="Jewelry craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/30" />
          <div className="absolute inset-4 md:inset-8 border border-gold/20" />
        </div>

        <div className="flex items-center section-padding py-16 md:py-24">
          <div className="max-w-md">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Since 2019
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Designed for the Woman Who Knows
            </h2>
            <p className="font-sans text-sm md:text-base text-stone leading-relaxed mb-8">
              Velmora was born from a simple belief: fine jewelry should feel accessible,
              not exclusive. Every piece is thoughtfully designed in small batches using
              18K gold plating and hypoallergenic materials — so you can wear beauty
              without compromise.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
