import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={14} fill="#C9A96E" stroke="#C9A96E" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-ivory p-8 md:p-10 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              <StarRow />
              <blockquote className="font-serif text-lg md:text-xl text-ink font-light leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <div className="border-t border-linen pt-5">
                <p className="font-sans text-sm font-semibold text-ink">{t.name}</p>
                <p className="font-sans text-xs text-muted mt-0.5">Verified Purchase · {t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-12">
          <p className="font-sans text-sm text-muted">
            <span className="text-gold font-semibold">4.8/5</span> average rating from over 500 verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
