import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em]">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-[#b68860] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 bg-white border border-[hsl(var(--border))]/30"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#b68860] text-[#b68860]"
                  />
                ))}
              </div>
              <p className="font-sans text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.1em]">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}