import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
            What Our Customers Say
          </h2>
          <div className="section-divider" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-gold-200 mx-auto mb-4" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>

              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <p className="font-serif text-base text-charcoal tracking-wide">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
