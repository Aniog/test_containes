import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-stone-offWhite">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs uppercase tracking-widest text-gold-antique">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Jewelry Crafted<br />with Intention
            </h2>
            <p className="mt-6 text-stone-warm leading-relaxed">
              At Velmora, we believe jewelry should be more than an accessory—it should be a 
              cherished part of your journey. Each piece is thoughtfully designed and crafted 
              with premium materials, ensuring timeless elegance that transcends seasons.
            </p>
            <p className="mt-4 text-stone-warm leading-relaxed">
              Our commitment to quality means you can wear your pieces with confidence, 
              knowing they're made to last and made for you.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider text-charcoal hover:text-gold-antique transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}