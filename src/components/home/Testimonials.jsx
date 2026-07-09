import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#f5f0eb]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">What Our Customers Say</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#c9a96e] fill-[#c9a96e]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic serif-heading text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-sm tracking-wider uppercase font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
