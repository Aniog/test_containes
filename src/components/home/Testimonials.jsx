import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="serif-heading text-lg md:text-xl italic mb-6 leading-relaxed text-foreground/80">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
