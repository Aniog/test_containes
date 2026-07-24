import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream-dark)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-[var(--color-cream)] border-opacity-30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="animate-slide-in">
            <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-warm-gold)] uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mt-4">
              Crafted with Intention
            </h2>
            <div className="divider my-6" />
            <p className="text-[var(--color-stone)] leading-relaxed mb-6">
              At Velmora, we believe jewelry is more than an accessory—it's a form of self-expression, 
              a memory keeper, a daily reminder of your worth. Our pieces are designed to transition 
              seamlessly from morning coffee to evening elegance.
            </p>
            <p className="text-[var(--color-stone)] leading-relaxed mb-8">
              Each piece in our collection is crafted with intention, using only the finest materials 
              and attention to detail. We source our 18K gold-plated components from ethical suppliers 
              and work with skilled artisans who share our commitment to quality.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-sans tracking-wider uppercase text-[var(--color-charcoal)] hover:text-[var(--color-warm-gold)] transition-colors group"
            >
              Learn More About Us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}