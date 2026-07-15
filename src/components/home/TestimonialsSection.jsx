import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Reviews</p>
          <h2 className="serif-heading text-4xl md:text-5xl">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-background p-8 rounded-sm shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="serif-heading text-lg italic leading-relaxed mb-6 text-foreground/80">
                "{testimonial.text}"
              </p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
