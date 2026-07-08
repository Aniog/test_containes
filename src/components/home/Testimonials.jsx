import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Loved by Our Community
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 lg:p-10 text-center hover:shadow-premium-hover transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-sans text-base leading-relaxed text-velmora-charcoal/80 mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-3">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-velmora-soft-beige flex items-center justify-center">
                  <span className="font-serif text-sm text-velmora-gold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {testimonial.initial}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-sans text-sm font-medium text-velmora-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-velmora-warm-gray">
                    Verified Buyer
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="#reviews"
            className="font-sans text-sm tracking-wider uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors inline-flex items-center gap-2"
          >
            Read All Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
