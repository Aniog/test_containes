import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs tracking-ultra-wide text-accent mb-4 uppercase">
            Reviews
          </span>
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">
            Loved by Our Community
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold-500 fill-gold-500"
                />
              ))}
            </div>
            <span className="font-sans text-sm text-charcoal-600">
              4.9 average from 2,400+ reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ivory-100 rounded-xl p-8 border border-charcoal-200/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-charcoal-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans font-medium text-espresso">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-charcoal-500">
                    Verified Purchase
                  </p>
                </div>
                <span className="text-xs text-charcoal-400 italic">
                  {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
