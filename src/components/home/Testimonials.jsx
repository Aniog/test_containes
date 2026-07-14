import React from "react";
import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section
      className="bg-cream py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-editorial px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow">Loved By Thousands</p>
          <h2
            id="testimonials-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso mt-3"
          >
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="bg-ivory p-7 md:p-9 border border-line"
            >
              <StarRating value={t.rating || 5} size={14} />
              <p
                className="mt-5 font-serif text-lg leading-relaxed text-espresso"
                id={`testimonial-${i}-quote`}
              >
                "{t.quote}"
              </p>
              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-[12px] tracking-widest2 uppercase text-espresso">
                  — {t.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
