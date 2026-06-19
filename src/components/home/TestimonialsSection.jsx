import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="velmora-section bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="velmora-heading text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-6 md:p-8">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#c9a96e] fill-[#c9a96e]" />
                ))}
              </div>
              <blockquote className="velmora-heading text-lg md:text-xl text-[#1a1a1a] mb-6 leading-relaxed italic">
                "{t.text}"
              </blockquote>
              <p className="text-sm text-[#6b6b6b] tracking-wider uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
