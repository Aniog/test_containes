import React from "react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="reveal text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
          From Our Community
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-espresso md:text-5xl">
          Treasured Words
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, index) => (
          <blockquote
            key={t.name}
            className="reveal flex flex-col border border-line bg-ivory p-8 transition-shadow duration-500 hover:shadow-[0_18px_40px_-24px_rgba(43,33,24,0.35)] md:p-10"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Quote
              className="h-6 w-6 rotate-180 text-bronze/50"
              strokeWidth={1}
            />
            <div
              className="mt-4 flex gap-1"
              aria-label="Rated 5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-bronze text-bronze"
                  strokeWidth={1}
                />
              ))}
            </div>
            <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-espresso">
              "{t.quote}"
            </p>
            <footer className="mt-7 border-t border-line pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-espresso">
                {t.name}
              </p>
              <p className="mt-1 text-xs tracking-wide text-cocoa">
                Verified buyer · {t.piece}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
