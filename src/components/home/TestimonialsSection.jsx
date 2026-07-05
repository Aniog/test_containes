import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-3">Reviews</p>
          <h2 className="serif-heading text-4xl md:text-5xl font-light text-[#1A1A1A]">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-[#B8860B] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="bg-white p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#D4A843] text-[#D4A843]" />
                ))}
              </div>
              <p className="serif-heading text-xl text-[#1A1A1A] leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-[#6B6560]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
