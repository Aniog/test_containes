import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-gold uppercase font-sans">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-soft animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-taupe leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-sm font-medium text-espresso">
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

export default Testimonials;
