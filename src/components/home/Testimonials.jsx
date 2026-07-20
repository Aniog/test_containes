import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section-container py-20">
      <h2 className="font-serif text-3xl text-[#1c1917] md:text-4xl">What Our Customers Say</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.id} className="rounded-xl border border-[#e7e3dc] bg-white p-6">
            <div className="flex gap-1 text-[#b8860b]">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#5c5650]">“{item.text}”</p>
            <p className="mt-4 text-xs uppercase tracking-wide-custom text-[#1c1917]">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
