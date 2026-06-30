import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-cream-100">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="jewelry artisan workshop gold craftsmanship warm lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-brand-200/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-gold-500 text-xs uppercase tracking-mega-wide font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-950 mb-6 leading-tight">
              Jewelry That Feels<br />
              <span className="italic">Like You</span>
            </h2>
            <div className="divider-hairline w-12 mb-6" />
            <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury shouldn't require a compromise. 
              We create demi-fine jewelry that combines the craftsmanship of fine jewelry 
              with an accessible price point — because every woman deserves to feel extraordinary.
            </p>
            <p className="text-charcoal-600 text-sm md:text-base leading-relaxed mb-8">
              Each piece is designed in our New York studio, crafted with 18K gold plating 
              over surgical-grade steel, and rigorously tested for quality and comfort. 
              No shortcuts. No compromises. Just beautiful jewelry, made to last.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center text-charcoal-950 text-xs uppercase tracking-ultra-wide font-medium border-b border-charcoal-950 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
