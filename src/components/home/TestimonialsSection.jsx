import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="font-sans text-xs font-medium tracking-ultra-wide uppercase text-gold-500">
            Loved by Thousands
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cream-50">
            What Our Customers Say
          </h2>
          <div className="mt-4 w-12 h-px bg-gold-500 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg sm:text-xl text-cream-100/90 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="mt-6">
                <span className="font-sans text-sm font-medium text-cream-50 tracking-wide">
                  {testimonial.name}
                </span>
                <span className="block mt-1 font-sans text-xs text-cream-100/50">
                  on {testimonial.product}
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
