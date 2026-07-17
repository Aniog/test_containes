import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle mb-3">What our customers say</p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ivory-50 border border-gold-200/60 p-8 md:p-10 transition-premium hover:shadow-lg hover:shadow-gold-100/50"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-ink-600 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="font-serif text-gold-600 text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-ink-800">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-ink-400">
                    on {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
