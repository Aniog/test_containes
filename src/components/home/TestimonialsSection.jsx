import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="block text-gold-400 font-sans text-xs tracking-ultra-wide mb-3">
            REVIEWS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream-50">
            Loved by Many
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-charcoal-800 p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-gold-400 text-gold-400" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-cream-100 text-lg italic leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="text-cream-50 font-medium">
                  {testimonial.name}
                </p>
                <p className="text-charcoal-400 text-sm mt-1">
                  on {testimonial.product}
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
