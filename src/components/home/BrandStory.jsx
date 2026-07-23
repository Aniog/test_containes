import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-linen overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-widest text-taupe">Brand Image</span>
            </div>
          </div>

          {/* Text */}
          <div className="md:py-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet font-medium leading-tight">
              Designed with Intention
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p className="text-taupe leading-relaxed font-light">
              Velmora was born from a simple belief: fine jewelry should feel accessible,
              not exclusive. Every piece in our collection is designed in small batches
              using 18K gold plating, premium crystals, and hypoallergenic materials.
            </p>
            <p className="text-taupe leading-relaxed font-light mt-4">
              We create for the woman who wants to feel polished without the pretense —
              whether she is dressing for a boardroom, a brunch, or a quiet evening at home.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.15em] font-medium text-velvet hover:text-gold transition-colors group"
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
