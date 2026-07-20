import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium tracking-ultra-wide text-velmora-gold mb-3 block">
            REVIEWS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm border border-velmora-sand"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-text-secondary font-sans text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-velmora-sand pt-4">
                <p className="text-sm font-sans font-medium text-velmora-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-xs font-sans text-velmora-text-muted">
                  Verified Purchase
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-12">
          <p className="text-xs font-sans text-velmora-text-muted tracking-wide">
            OVER 10,000 HAPPY CUSTOMERS WORLDWIDE
          </p>
        </div>
      </div>
    </section>
  );
}
