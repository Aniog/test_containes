import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso-900 mb-4">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-100 rounded-lg p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-gold fill-gold' : 'text-border'
                    }`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-taupe italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gold-light flex items-center justify-center">
                  <span className="text-xs font-medium text-espresso-900">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-espresso-900">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
