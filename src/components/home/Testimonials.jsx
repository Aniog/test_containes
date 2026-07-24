import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Loved by Our Customers
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8"
              style={{ backgroundColor: 'var(--color-warm-white)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{ fill: 'var(--color-gold)', color: 'var(--color-gold)' }}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-walnut)' }}>
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div>
                <p className="font-medium">
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-taupe)' }}>
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
