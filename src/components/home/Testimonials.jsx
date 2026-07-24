import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

const Testimonials = () => {
  return (
    <section className="bg-white border-y border-gray-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 text-center">What our customers say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-gray-200/70 bg-white p-6 md:p-8">
              <div className="flex items-center gap-1 text-gold-700">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-medium tracking-wide text-gray-900 uppercase">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
