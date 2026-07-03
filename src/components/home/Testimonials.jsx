import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          className={s <= rating ? 'text-gold-400 fill-gold-400' : 'text-charcoal-300'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="label text-gold-500 mb-3">What they say</p>
          <h2 className="heading-2 text-charcoal-900">Loved by thousands</h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 md:p-8 shadow-soft border border-charcoal-100/50"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating rating={t.rating} />
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base md:text-lg text-charcoal-800 leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold-700 font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-sans font-medium text-charcoal-900">{t.name}</p>
                  <p className="text-xs font-sans text-charcoal-500">Verified buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-10 pt-10 border-t border-charcoal-100">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-serif text-3xl font-light text-charcoal-900">4.9</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="text-gold-400 fill-gold-400" />
              ))}
            </div>
          </div>
          <p className="body-text-sm text-charcoal-500">
            Based on 4,200+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
