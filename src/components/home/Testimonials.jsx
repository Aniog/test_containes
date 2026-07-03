import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ivory p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-champagne fill-champagne' : 'text-light-stone'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-stone text-sm">
                {testimonial.initials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}