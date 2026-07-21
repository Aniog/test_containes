import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-sand">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-velmora-espresso/5" />
          </div>

          <div className="lg:py-10">
            <p className="text-xs uppercase tracking-widest-xl text-velmora-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso mb-6">
              Quiet Luxury, Made Accessible
            </h2>
            <div className="space-y-5 text-velmora-coffee leading-relaxed mb-8">
              <p>
                Velmora was founded on a simple belief: fine jewelry should feel attainable. Each piece is designed in-house and finished in 18k gold plate, balancing elevated craftsmanship with a price point that invites everyday wear.
              </p>
              <p>
                We favor clean silhouettes, warm tones, and thoughtful details — jewelry that becomes part of your story rather than stealing the spotlight.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-velmora-espresso hover:text-velmora-gold transition-colors group"
            >
              <span>Our Story</span>
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
