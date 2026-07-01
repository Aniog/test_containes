import React from "react"
import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            What They're Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="text-center px-4 md:px-8 py-8 border border-hairline"
            >
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-espresso leading-relaxed italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
