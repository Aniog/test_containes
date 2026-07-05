import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-charcoal/20 border border-charcoal/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-muted/20 tracking-widest uppercase">Brand Story Image</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ivory leading-[1.15] mb-6">
              Jewelry That<br />
              <span className="text-gold italic">Moves With You</span>
            </h2>
            <div className="w-12 h-px bg-gold/30 mb-6" />
            <p className="font-sans text-base text-muted/80 leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should be lived in, not locked away. Our pieces are crafted from premium 18K gold-plated surgical steel — designed to be worn from morning coffee to midnight cocktails.
            </p>
            <p className="font-sans text-base text-muted/80 leading-relaxed mb-8">
              Every piece is hypoallergenic, tarnish-resistant, and made to last. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors group"
            >
              READ OUR STORY
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
