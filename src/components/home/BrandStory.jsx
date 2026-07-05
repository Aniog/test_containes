import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400/30 rounded-lg hidden lg:block" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-600 mb-4">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Where Elegance Meets
              <span className="block italic text-gold-600">Intention</span>
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be more than an accessory—it should be a reflection of who you are and who you're becoming. Each piece is thoughtfully designed to capture those quiet moments of beauty.
              </p>
              <p>
                Our demi-fine jewelry bridges the gap between luxury and accessibility. We use only the finest materials: 18K gold plating, hypoallergenic metals, and carefully selected gemstones that sparkle with intention.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center gap-3 mt-8 group"
            >
              <span className="font-sans text-sm tracking-extra-wide uppercase text-charcoal group-hover:text-gold-600 transition-colors">
                Our Story
              </span>
              <ArrowRight 
                size={16} 
                className="text-charcoal group-hover:text-gold-600 transition-colors group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
