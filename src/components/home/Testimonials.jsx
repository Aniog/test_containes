import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-ultra-wide text-taupe mb-3 block">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 md:p-10 relative"
            >
              {/* Quote Mark */}
              <span className="font-serif text-6xl text-gold-300 absolute top-4 left-6 leading-none">
                "
              </span>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 relative">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-taupe leading-relaxed mb-6 relative">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <p className="font-serif text-lg text-espresso">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-12">
          <p className="text-sm text-taupe">
            Rated 4.9/5 based on 500+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
