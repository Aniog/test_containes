import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-8xl text-velmora-cream opacity-50">V</span>
            </div>
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-charcoal leading-tight">
              Jewelry for the Moments That Matter
            </h2>
            <div className="mt-6 space-y-4 text-velmora-stone leading-relaxed">
              <p>
                Velmora was born from a simple belief: luxury should feel personal, not precious. 
                We design demi-fine jewelry that moves with you — from morning coffee to midnight toasts.
              </p>
              <p>
                Each piece is crafted in small batches using 18K gold-plated brass and 
                responsibly sourced crystals. Our atelier in London blends timeless silhouettes 
                with modern wearability.
              </p>
            </div>
            <Link
              to="#"
              className="inline-flex items-center gap-2 mt-8 text-xs font-semibold tracking-widest uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
