import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} strokeWidth={1} className="star-filled fill-gold" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-widest uppercase text-gold mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-8 md:p-10 flex flex-col"
            >
              <StarRow count={t.rating} />
              <blockquote
                className="text-base md:text-lg font-light text-charcoal leading-relaxed flex-1 italic"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-border">
                <p
                  className="text-xs tracking-widest uppercase text-taupe font-medium"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  — {t.name}
                </p>
                <p
                  className="text-xs text-warm-gray mt-1"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Verified Purchase
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
