import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-charcoal-100 overflow-hidden order-2 lg:order-1">
            <img
              data-strk-img-id="brand-story-jewelry"
              data-strk-img="artisan crafting gold jewelry workshop warm lighting"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-400 -z-10 hidden lg:block" />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-600 mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-heading-xl md:text-display text-charcoal-800 mb-8">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-5 text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that every woman deserves access to beautifully crafted jewelry that feels as special as it looks.
              </p>
              <p>
                Our pieces are designed with intention — each curve, each setting, each detail carefully considered. We work with skilled artisans who share our passion for quality, using 18K gold plating over sterling silver to create jewelry that lasts.
              </p>
              <p>
                From the everyday huggie to the statement necklace, each Velmora piece is crafted to be treasured for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm tracking-[0.15em] uppercase text-charcoal-800 hover:text-gold-700 transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
