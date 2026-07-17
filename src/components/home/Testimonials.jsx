import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-gold text-xs uppercase tracking-[0.15em] mb-2 text-center">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb] text-center mb-12">
          Loved by Our Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6 md:p-8 hover:border-[#3a3a3a] transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm text-[#a09890] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-xs text-gold font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-sm text-[#f5f0eb]">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}