import React from "react";
import { testimonials } from "@/data/products";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">
            What Our Customers Say
          </h2>
          <p className="text-stone-500 text-sm">
            Real stories from real women who wear Velmora.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 sm:p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-lg italic text-stone-700 mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-stone-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
