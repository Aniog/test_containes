import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--color-gold)] -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-4">
              Our Story
            </p>

            <h2
              className="text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Jewelry that tells your story
            </h2>

            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel extraordinary. 
                Our pieces are designed with intention—each curve, each detail crafted to become part of your 
                personal narrative.
              </p>
              <p>
                Founded in 2019, we set out to create demi-fine jewelry that bridges the gap between 
                everyday affordability and timeless luxury. Every Velmora piece is 18K gold-plated, 
                hypoallergenic, and designed to move seamlessly from morning meetings to evening celebrations.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.15em] uppercase text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors group"
            >
              Discover Our Journey
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}