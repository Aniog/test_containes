import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--ivory-cream)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--champagne-gold)]/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p
              className="text-sm tracking-[0.2em] text-[var(--champagne-gold)] mb-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              OUR STORY
            </p>
            <h2
              className="text-3xl md:text-4xl text-[var(--deep-espresso)] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Where Craftsmanship
              <br />
              Meets <span className="italic">Intention</span>
            </h2>
            <div className="divider-diamond mb-8">
              <div className="divider-diamond-icon" />
            </div>
            <p
              className="text-[var(--charcoal)] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              At Velmora, we believe jewelry should tell a story. Every piece in our collection 
              is thoughtfully designed to capture moments of beauty, celebration, and everyday luxury.
            </p>
            <p
              className="text-[var(--charcoal)] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Born from a passion for accessible elegance, we craft demi-fine jewelry that 
              combines premium materials with timeless design. Each piece is made with 
              18K gold plating over sterling silver, ensuring lasting beauty you can treasure.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wider hover:text-[var(--champagne-gold)] transition-colors group"
            >
              <span>Discover Our Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
