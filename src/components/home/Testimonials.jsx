import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of women who trust Velmora for their everyday jewelry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface p-8 border border-border-warm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-charcoal leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border-warm pt-4">
                <p className="font-sans text-sm font-medium text-charcoal">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-warm-gray mt-0.5">
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
