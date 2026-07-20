import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="aspect-[4/5] bg-cream-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-gold-600 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide mb-6 leading-snug">
              Jewelry That Feels
              <br />
              Like Home
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              Velmora was born from a belief that fine jewelry should not be
              reserved for special occasions alone. We craft demi-fine pieces
              in 18K gold plating that transition effortlessly from morning
              coffee to evening celebrations.
            </p>
            <p className="text-charcoal-600 leading-relaxed mb-8">
              Every design is thoughtfully created in our studio, tested for
              everyday wear, and finished by hand. We prioritize hypoallergenic
              materials so you can wear your favorites without worry.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-charcoal-900 hover:text-gold-600 transition-colors"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
