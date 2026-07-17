import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] bg-gradient-to-br from-gold-200/20 via-ink-100 to-ink-200 rounded-sm overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-gold-400/20" />
              <div className="absolute w-32 h-32 rounded-full border border-gold-400/30" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-cream-50/90 backdrop-blur-sm p-4 rounded-sm">
                <p className="text-ink-800 text-xs uppercase tracking-widest font-medium">
                  Handcrafted with care
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="max-w-lg">
            <span className="text-gold-600 text-xs uppercase tracking-widestplus font-medium">Our Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 font-light mt-3 tracking-wide leading-tight">
              Jewelry that honors
              <br />
              <span className="font-semibold">the art of being you</span>
            </h2>
            <div className="w-12 h-px bg-gold-400/50 my-6" />
            <p className="text-ink-600 text-sm sm:text-base leading-relaxed font-light">
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for once-in-a-lifetime moments.
              Every piece is designed in our London studio, crafted in 18K gold-plated materials, and rigorously tested for everyday wear.
            </p>
            <p className="text-ink-600 text-sm sm:text-base leading-relaxed font-light mt-4">
              We work directly with master artisans — no middlemen, no markups. Just exceptional quality at honest prices.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink-700 hover:text-gold-600 transition-colors border-b border-ink-300 hover:border-gold-500 pb-0.5"
            >
              Read Our Story
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}