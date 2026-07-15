import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-warm-gray max-w-lg mx-auto">
            Real stories from women who wear Velmora every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-ivory p-6 lg:p-8 shadow-subtle"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-gray leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-medium text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-soft-gray">
                    Purchased: {testimonial.product}
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
