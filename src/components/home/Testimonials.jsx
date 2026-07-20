import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';
import AnimatedSection from '../ui/AnimatedSection';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-3">
            Love Letters
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </AnimatedSection>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              delay={index + 1}
              className="bg-brand-50 border border-brand-200/40 rounded-sm p-6 sm:p-8 relative"
            >
              <Quote className="w-8 h-8 text-gold-200 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-charcoal-700 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between border-t border-brand-200/40 pt-4">
                <div>
                  <p className="text-sm font-semibold text-charcoal-900">{testimonial.name}</p>
                  <p className="text-xs text-charcoal-500 mt-0.5">Verified Buyer</p>
                </div>
                <p className="text-[10px] tracking-wide uppercase text-charcoal-400">
                  {testimonial.product}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
