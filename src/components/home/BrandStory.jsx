import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section bg-[var(--color-cream)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />

            {/* Floating Quote Card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-64 bg-white/95 backdrop-blur-sm p-6 rounded shadow-lg">
              <p className="font-serif italic text-[var(--color-charcoal)] text-sm leading-relaxed mb-3">
                &ldquo;Every piece is designed to become a part of your everyday story.&rdquo;
              </p>
              <p className="text-xs text-[var(--color-gold)] tracking-[0.1em] uppercase">
                — Our Philosophy
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">
              Our Story
            </p>

            <h2 className="heading-2 text-[var(--color-charcoal)] mb-6">
              Jewelry with
              <br />
              <span className="italic">Intention</span>
            </h2>

            <div className="space-y-4 text-[var(--color-warm-gray)] body-md mb-8">
              <p>
                Velmora was born from a simple belief: everyone deserves to wear beautiful jewelry 
                that feels luxurious without compromise. We craft each piece with intention, 
                using premium materials that are hypoallergenic and built to last.
              </p>
              <p>
                Our designs draw inspiration from the warmth of golden hour light, the elegance 
                of timeless architecture, and the quiet confidence of those who know true style. 
                Every curve, every detail is considered.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors group"
            >
              Discover Our Journey
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
