import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-sm" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gold text-sm tracking-ultra-wide uppercase mb-4">
              Our Story
            </p>
            
            <h2 className="section-title mb-8">
              Where Craft Meets<br />Quiet Luxury
            </h2>
            
            <div className="space-y-6 text-charcoal/80 leading-relaxed">
              <p>
                Velmora was born from a simple belief: jewelry should feel like a quiet celebration — not a statement. We craft demi-fine pieces in 18K gold plating that move with you from morning coffee to evening aperitivo.
              </p>
              <p>
                Each design starts with intention, is refined through countless iterations, and is finished by artisans who share our obsession with quality. The result? Jewelry you'll reach for every day, not just for special occasions.
              </p>
            </div>
            
            <Link
              to="#"
              className="inline-flex items-center gap-3 mt-10 text-charcoal hover:text-gold transition-colors group"
            >
              <span className="font-medium tracking-wide">Discover Our Journey</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
