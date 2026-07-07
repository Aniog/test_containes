import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getImageSrc } from '@/lib/images';

export function BrandStorySection() {
  return (
    <section className="py-20 md:py-0 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-stretch">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden bg-sand">
            <img
              src={getImageSrc('brand-story-image')}
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center md:pl-16 lg:pl-24 py-8 md:py-20">
            <p className="text-xs uppercase tracking-brand text-gold-dark font-sans mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-6"
            >
              Quiet Luxury,<br />Made Personal
            </h2>
            <p
              id="brand-story-subtitle"
              className="font-sans text-base md:text-lg text-ink/70 leading-relaxed mb-8 max-w-md"
            >
              Velmora was born from a simple belief: fine jewelry should feel attainable, personal, and made to be worn every day. Each piece is cast in small batches and finished by hand.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-brand text-ink hover:text-gold transition-colors group"
            >
              Our Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
