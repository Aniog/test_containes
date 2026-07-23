import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-spacing bg-[var(--color-ivory-warm)]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Accent border */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 w-16 md:w-24 h-16 md:h-24 border-t border-l border-[var(--color-gold)]" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                We craft demi-fine pieces using premium materials—18K gold plating, hypoallergenic metals, and ethically sourced stones. Each design is thoughtful, elegant, and made to be worn every day.
              </p>
              <p>
                Because the most precious moments deserve jewelry that's just as precious.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-wider hover:text-[var(--color-gold)] transition-colors group"
            >
              Discover Our Story
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
