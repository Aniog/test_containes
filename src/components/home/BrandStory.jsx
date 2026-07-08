import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gold/15 flex items-center justify-center border border-gold/30">
                <span className="font-serif text-4xl text-gold/60">V</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
                Jewelry with
                <br />
                <em className="italic">Intention</em>
              </h2>
            </div>
            <p className="text-taupe leading-relaxed">
              Velmora was born from a belief that luxury should feel personal, not
              distant. Each piece is designed in small batches, combining timeless
              silhouettes with modern craftsmanship. We use 18K gold plating on
              hypoallergenic bases — so you can wear your treasures every day, without
              compromise.
            </p>
            <p className="text-taupe leading-relaxed">
              From the first sketch to the final polish, every detail is considered.
              Because the best jewelry is not just worn — it is lived in.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal font-medium hover:text-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
