import React from "react"
import { testimonials } from "@/data/content"
import Stars from "@/components/ui/Stars"

export default function Testimonials() {
  return (
    <section
      id="home-testimonials"
      className="bg-bone py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne-deep mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight max-w-2xl mx-auto">
            What our community is saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-bone-soft border border-line p-8 md:p-10 flex flex-col"
            >
              <Stars rating={t.rating} size={14} className="mb-6" />
              <blockquote className="font-serif text-[19px] md:text-xl leading-snug text-ink flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-line text-[11px] tracking-widest3 uppercase text-muted">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
