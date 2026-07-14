import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--color-accent)] -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-[var(--color-accent)] text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text)] mb-6 leading-tight">
              Where craftsmanship<br />
              <span className="italic text-[var(--color-accent-light)]">meets meaning</span>
            </h2>

            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Velmora was born from a simple belief: the jewelry you wear every day should feel special. Not just on special occasions, but in the quiet moments — your morning coffee, a meaningful conversation, a small victory.
              </p>
              <p>
                Each piece is handcrafted by skilled artisans using ethically sourced materials. We partner with family-owned workshops who share our commitment to quality and sustainability.
              </p>
              <p>
                Our demi-fine jewelry bridges the gap between fashion and fine jewelry. Designed to be worn, cherished, and passed down.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors group"
            >
              <span className="text-sm tracking-wider uppercase">Learn More</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
