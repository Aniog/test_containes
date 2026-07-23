import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">What They Say</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light">Loved by Thousands</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm border border-[#E8E2D9] text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6 italic font-light">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground mt-1">Verified Buyer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
