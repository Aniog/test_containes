import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-medium text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-linen p-8 border border-velmora-stone/10 hover:shadow-gold transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" className="text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg font-light italic text-velmora-ink leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-xs font-semibold text-velmora-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs tracking-widest uppercase font-medium text-velmora-mist">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
