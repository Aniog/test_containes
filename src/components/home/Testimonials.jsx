import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const GOLD = '#C9A96E';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} strokeWidth={1} style={{ fill: GOLD, color: GOLD }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28 border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <StarRow />
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-ink leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-divider">
                <p className="font-manrope text-xs font-semibold tracking-[0.1em] uppercase text-muted">
                  — {t.name}
                </p>
                <p className="font-manrope text-[11px] text-ghost mt-0.5">Verified Purchase</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
