import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-linen py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-velmora-ink">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    className="text-velmora-gold"
                    fill="currentColor"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg lg:text-xl font-light text-velmora-ink leading-relaxed flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-velmora-gold mb-5" />

              {/* Author */}
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-warm-gray">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
