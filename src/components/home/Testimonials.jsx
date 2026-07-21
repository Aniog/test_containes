import React from "react"
import SectionHeading from "@/components/SectionHeading"
import StarRating from "@/components/product/StarRating"
import { TESTIMONIALS } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Treasured by Thousands"
          sub="Over 12,000 five-star reviews from women who wear Velmora every day."
        />
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="animate-fade-up border-t border-line pt-8 text-center md:text-left"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <StarRating rating={5} size={14} className="justify-center md:justify-start" />
              <blockquote className="mt-5 font-serif text-xl font-light leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-foreground">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
