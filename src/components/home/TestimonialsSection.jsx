import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl font-light mb-4">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="serif-heading text-lg md:text-xl font-light italic leading-relaxed mb-6 text-balance">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
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
