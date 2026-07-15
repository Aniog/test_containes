import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="text-center mb-12 sm:mb-16">
        <span className="eyebrow">Loved by</span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mt-3 text-sable">
          Quiet praise
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className="bg-ivory-50 border border-sable/10 p-7 sm:p-8 flex flex-col"
          >
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-3.5 h-3.5 text-gold fill-gold"
                  strokeWidth={0}
                />
              ))}
            </div>
            <blockquote className="font-serif text-lg sm:text-xl italic font-light text-sable leading-relaxed flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-gold-soft flex items-center justify-center font-sans text-sm text-sable font-medium">
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="font-sans text-sm text-sable">{t.name}</div>
                <div className="font-sans text-[10px] tracking-widest2 uppercase text-taupe mt-0.5">
                  Verified buyer · Review {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
