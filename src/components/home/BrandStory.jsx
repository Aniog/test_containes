import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80"
              alt="Jewelry craftsmanship"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
            <p className="text-xs tracking-[0.35em] uppercase text-gold-600 font-medium mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 leading-tight max-w-md">
              Quiet Luxury, <br />Made to Last
            </h2>
            <p className="mt-6 text-ink-600 leading-relaxed max-w-md text-sm sm:text-base">
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. 
              We design demi-fine pieces in 18K gold plate that transition effortlessly from morning coffee 
              to evening celebrations — always elegant, never overpowering.
            </p>
            <p className="mt-4 text-ink-600 leading-relaxed max-w-md text-sm sm:text-base">
              Every piece is designed in-house and crafted with care, using hypoallergenic materials 
              that are kind to sensitive skin. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-ink-900 hover:text-gold-600 transition-colors group"
            >
              Our Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
