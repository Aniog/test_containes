import { testimonials } from '../../data/products';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-extra-wide uppercase text-gold-400 mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-50">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg sm:text-xl text-cream-100 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <cite className="font-sans text-sm text-charcoal-300 not-italic">
                — {testimonial.name}
              </cite>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-charcoal-700">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <p className="font-serif text-3xl text-cream-50 mb-1">10K+</p>
              <p className="font-sans text-xs text-charcoal-400 uppercase tracking-wider">Happy Customers</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-charcoal-700" />
            <div className="text-center">
              <p className="font-serif text-3xl text-cream-50 mb-1">4.9</p>
              <p className="font-sans text-xs text-charcoal-400 uppercase tracking-wider">Average Rating</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-charcoal-700" />
            <div className="text-center">
              <p className="font-serif text-3xl text-cream-50 mb-1">30 Days</p>
              <p className="font-sans text-xs text-charcoal-400 uppercase tracking-wider">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
