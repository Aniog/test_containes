import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
            Loved by Our Customers
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-12 bg-primary/50" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col border border-border/50 bg-card p-8 transition-all duration-300 hover:shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mt-5 flex-1 font-serif text-base leading-relaxed italic text-foreground/70 md:text-lg">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="mt-6 font-sans text-xs font-medium uppercase tracking-[0.1em] text-foreground/50">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}