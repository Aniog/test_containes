import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] uppercase text-gold mb-3 block">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Loved by Our Customers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ivory p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-warm-gray leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-medium text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-warm-gray">
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
