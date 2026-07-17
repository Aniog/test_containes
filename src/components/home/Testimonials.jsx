import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-spacing">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-3">
            What Our Customers Say
          </p>
          <h2 className="section-title">Love Letters</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-soft hover:shadow-lift transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-taupe font-light leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-cream flex items-center justify-center">
                  <span className="font-serif text-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-medium-gray">
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
