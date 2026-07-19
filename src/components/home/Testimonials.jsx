import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-[#3d3229] mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-6 md:p-8 rounded-sm border border-[#e8e0d5]">
              <div className="flex gap-1 text-[#b08d57]">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-[#3d3229] leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs tracking-widest uppercase text-[#8c7b6b]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
