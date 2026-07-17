import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-ultra-wide uppercase text-gold">
            What They Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 relative"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 left-6 font-serif text-6xl text-gold/20 leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-gray leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-hairline pt-4">
                <p className="font-sans text-sm font-medium">
                  {testimonial.name}
                </p>
                <p className="text-xs text-taupe mt-1">
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

export default TestimonialsSection;
