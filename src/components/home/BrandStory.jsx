import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto md:h-full bg-brand-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <h2 className="heading-serif text-3xl md:text-4xl text-brand-charcoal font-light mb-6 leading-tight">
                Crafted with<br />
                <span className="italic">Intention</span>
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold mb-6" />
              <p className="font-sans text-sm md:text-base text-brand-taupe leading-relaxed mb-4">
                Every piece of Velmora jewelry begins with a sketch and a story. We work with master artisans who transform precious metals and ethically sourced stones into heirlooms of tomorrow.
              </p>
              <p className="font-sans text-sm md:text-base text-brand-taupe leading-relaxed mb-8">
                From our studio to you — no middlemen, no markups. Just honest craftsmanship at an accessible price.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-brand-charcoal hover:text-brand-gold transition-colors group"
              >
                Our Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}