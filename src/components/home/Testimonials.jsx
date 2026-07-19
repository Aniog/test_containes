import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">What They Say</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Loved by Thousands</h2>
          <div className="w-12 h-px bg-accent/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-8 rounded shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic serif-heading">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground mt-1">Verified Customer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
