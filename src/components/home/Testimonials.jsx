import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <Reveal>
          <div className="text-center mb-14 md:mb-20 max-w-2xl mx-auto">
            <p className="vm-eyebrow text-ink-muted">Loved</p>
            <h2 className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05]">
              <span className="italic font-light">Worn daily.</span> Reordered often.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="h-full p-8 md:p-10 bg-cream-50 border border-ink/8 flex flex-col">
                <div className="flex items-center gap-0.5 text-gold" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 vm-serif text-2xl md:text-[28px] leading-snug text-ink">
                  <span className="italic font-light">"{t.title}"</span>
                </blockquote>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">{t.body}</p>
                <figcaption className="mt-8 pt-6 border-t border-ink/10 text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                  — {t.name}, Verified Buyer
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
