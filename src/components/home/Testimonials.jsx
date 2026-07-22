import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-cream-50 p-6 md:p-8 border border-cream-200 relative group">
      {/* Quote mark */}
      <div className="absolute top-4 left-4 font-serif text-6xl text-gold-200/50 leading-none select-none">
        "
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-charcoal-300'}`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-sans text-sm text-charcoal-700 leading-relaxed mb-4 relative z-10">
        "{testimonial.text}"
      </p>

      {/* Attribution */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-serif text-sm text-charcoal-900">
            {testimonial.name}
          </p>
          <p className="text-xs text-charcoal-400 mt-0.5">
            Verified Purchase
          </p>
        </div>
        <p className="text-xs text-charcoal-400 italic">
          {testimonial.product}
        </p>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
            What Our Customers Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-3">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="text-center">
            <p className="font-serif text-2xl text-charcoal-900">4.9</p>
            <div className="flex items-center gap-0.5 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
              ))}
            </div>
            <p className="text-xs text-charcoal-500 mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-charcoal-200" />
          <div className="text-center">
            <p className="font-serif text-2xl text-charcoal-900">2,500+</p>
            <p className="text-xs text-charcoal-500 mt-1">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-charcoal-200" />
          <div className="text-center">
            <p className="font-serif text-2xl text-charcoal-900">98%</p>
            <p className="text-xs text-charcoal-500 mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
