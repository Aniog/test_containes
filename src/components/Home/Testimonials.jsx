import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">What Our Customers Say</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            {/* Star Rating */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                  className="text-velmora-gold"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="font-sans text-base leading-relaxed text-velmora-charcoal/80 mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                <span className="font-serif text-lg text-velmora-gold">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-velmora-charcoal">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-velmora-muted">Verified Buyer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
