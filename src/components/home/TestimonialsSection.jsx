import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-ivory p-8 md:p-10 relative group">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-gold/20">
        <Quote className="w-12 h-12" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-gold fill-gold"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-charcoal leading-relaxed mb-6 font-light italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
          <span className="text-sm font-semibold text-charcoal">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal">
            {testimonial.name}
          </p>
          <p className="text-xs text-warm-gray">
            Verified Purchase
          </p>
        </div>
      </div>

      {/* Product Reference */}
      <div className="mt-4 pt-4 border-t border-sand">
        <p className="text-xs text-warm-gray">
          Purchased: <span className="text-charcoal font-medium">{testimonial.product}</span>
        </p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
          <div>
            <p className="font-serif text-3xl text-gold mb-1">4.9</p>
            <p className="text-xs text-ivory/60 tracking-wide uppercase">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-ivory/20 hidden md:block" />
          <div>
            <p className="font-serif text-3xl text-gold mb-1">50K+</p>
            <p className="text-xs text-ivory/60 tracking-wide uppercase">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-ivory/20 hidden md:block" />
          <div>
            <p className="font-serif text-3xl text-gold mb-1">98%</p>
            <p className="text-xs text-ivory/60 tracking-wide uppercase">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
