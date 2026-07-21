import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";
import { Eyebrow, Stars } from "@/components/ui/primitives";

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <Eyebrow>Kind Words</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl">
            Treasured by Thousands
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className="flex flex-col border border-stone bg-cream p-8 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote size={22} strokeWidth={1} className="text-gold" />
              <p className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <footer className="mt-7 border-t border-stone pt-5">
                <Stars rating={5} size={13} />
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-taupe">on the {t.piece}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
