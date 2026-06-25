import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-gold)] -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-[var(--color-gold)] text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-6 leading-tight">
              Where Intention Meets <br />
              <span className="italic">Everyday Elegance</span>
            </h2>
            <div className="space-y-4 text-[var(--color-stone)] leading-relaxed">
              <p>
                Velmora was born from a simple belief: the finest things shouldn't be reserved for special occasions. We create demi-fine jewelry that moves with you—from morning coffee to evening celebrations.
              </p>
              <p>
                Each piece is hand-finished in our studio using ethically sourced materials. Our 18K gold plating technique ensures lasting beauty without the luxury price tag.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors group"
            >
              <span className="tracking-wide">Read Our Story</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
