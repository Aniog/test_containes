import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-charcoal rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-warmgray-light/40 text-xs uppercase tracking-widest">Brand Story Image</span>
            </div>
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Designed for the Modern Muse
            </h2>
            <p className="mt-6 text-warmgray leading-relaxed">
              Velmora was born from a simple belief: luxury should feel effortless. Each piece in our collection is thoughtfully designed using 18K gold plating and hypoallergenic materials, so you can wear them from morning coffee to evening cocktails without a second thought.
            </p>
            <p className="mt-4 text-warmgray leading-relaxed">
              We work with skilled artisans who share our passion for detail, ensuring every curve, clasp, and crystal is placed with intention.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-charcoal text-xs tracking-[0.2em] uppercase font-medium hover:text-gold transition-colors group"
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
