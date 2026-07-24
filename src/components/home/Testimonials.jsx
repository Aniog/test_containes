import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-label mb-3">What Our Customers Say</p>
          <h2 className="heading-section">Loved By Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm border border-brand-sand/50 hover:shadow-lg hover:shadow-brand-gold/5 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-brand-charcoal leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="border-t border-brand-sand/50 pt-4">
                <p className="font-medium text-sm text-brand-black">{testimonial.name}</p>
                <p className="text-xs text-brand-warmgray mt-0.5">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
