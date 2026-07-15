import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="container-custom">
        <h2
          className="section-title text-center mb-12 md:mb-16"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-8 md:p-10 border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8E2DA] flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground/60">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
