import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 lg:py-24 bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl sm:text-4xl lg:text-5xl mb-3">What They Say</h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="serif-heading text-lg lg:text-xl italic leading-relaxed mb-6 text-foreground/80">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
