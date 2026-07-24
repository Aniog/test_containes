import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="hairline mx-auto mb-6" />
          <h2 className="heading-section text-charcoal-800" id="testimonials-title">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-cream-50 border border-cream-300 p-8 text-center"
            >
              <Quote className="w-8 h-8 text-gold-300 mx-auto mb-5" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div>
                <p className="text-sm font-medium text-charcoal-800">{testimonial.name}</p>
                <p className="text-xs text-charcoal-400 mt-0.5">Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
