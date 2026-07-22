import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-8 rounded-sm shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-foreground/80 italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">Verified Purchase</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
