import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">What Our Customers Say</h2>
          <div className="hairline-divider w-16 mx-auto mb-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="serif-heading text-lg italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-muted-foreground tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
