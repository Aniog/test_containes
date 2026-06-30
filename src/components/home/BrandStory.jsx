import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-stone mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight">
              Designed for
              <br />
              Modern Elegance
            </h2>
            <div className="w-12 h-px bg-velmora-gold my-6 md:my-8" />
            <p className="text-velmora-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should feel accessible, not aspirational. Each piece is thoughtfully designed in small batches, using 18K gold plating and carefully sourced materials that stand the test of time.
            </p>
            <p className="text-velmora-stone leading-relaxed mb-8">
              Whether you are curating your everyday stack or searching for the perfect gift, our collection is crafted to be treasured — today, tomorrow, and for years to come.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-velmora-base hover:text-velmora-gold transition-colors group"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
