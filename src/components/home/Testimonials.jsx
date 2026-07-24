import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/products";
import Stars from "@/components/ui/Stars";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="eyebrow">Kind Words</p>
          <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
            From Our Community
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col border border-line bg-ivory p-8 transition-shadow duration-500 hover:shadow-[0_20px_50px_-25px_rgba(22,18,14,0.3)]">
                <Quote className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <blockquote className="mt-4 flex-1 font-serif text-lg font-light leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                    {t.name}
                  </span>
                  <Stars rating={5} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
