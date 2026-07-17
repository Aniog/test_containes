import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/800x1000/1A1918/C8A97E?text=Our+Craft"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-5xl text-warm-white leading-tight">
              Designed with Intention,<br />Made to Last
            </h2>
            <p className="mt-6 text-base text-taupe leading-relaxed font-sans font-light">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions.
              Every piece is designed in-house and crafted in small batches using 18K gold-plated brass
              and responsibly sourced crystals. We create jewelry that feels as good as it looks —
              lightweight, hypoallergenic, and made to be worn daily.
            </p>
            <p className="mt-4 text-base text-taupe leading-relaxed font-sans font-light">
              From the first sketch to the final polish, we obsess over the details so you do not have to.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-sans font-medium text-accent hover:text-accent-hover transition-colors uppercase tracking-wider"
            >
              Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
