import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="fill-star text-star" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-parchment px-8 py-10 relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote mark */}
              <div className="font-cormorant text-6xl text-gold leading-none absolute top-4 left-6 select-none">
                "
              </div>

              <StarRow />

              <blockquote className="font-cormorant text-lg font-light text-ink leading-relaxed italic mb-6 relative z-10">
                "{t.text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-muted">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs tracking-wider uppercase text-muted">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 pt-12 border-t border-linen grid grid-cols-3 gap-4 text-center">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-cormorant text-4xl md:text-5xl font-light text-gold mb-1">
                {stat.value}
              </p>
              <p className="font-manrope text-xs tracking-[0.1em] uppercase text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
