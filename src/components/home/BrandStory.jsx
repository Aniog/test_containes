import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-cream-dark">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-charcoal leading-tight">
              Crafted with
              <span className="italic block">Intention</span>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p className="text-sm md:text-base text-warm-gray leading-relaxed">
              Every piece of Velmora jewelry is designed in our atelier and hand-finished 
              by skilled artisans. We believe in jewelry that feels as good as it looks — 
              pieces you can wear every day, layer with meaning, and pass down with stories.
            </p>
            <p className="text-sm md:text-base text-warm-gray leading-relaxed mt-4">
              From ethically sourced materials to thoughtful packaging, we are committed 
              to creating beauty that respects both people and planet.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 mt-8 text-xs uppercase tracking-widest text-gold hover:text-warm-charcoal transition-colors border-b border-gold pb-0.5"
            >
              Our Story <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}