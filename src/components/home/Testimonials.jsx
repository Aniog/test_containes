import React from "react"
import { Star } from "lucide-react"
import SectionHeading from "@/components/common/SectionHeading"

const reviews = [
  {
    quote: "The huggies look far more expensive than they are. I wear them almost every day and they still feel special.",
    name: "Maya R.",
  },
  {
    quote: "I bought the necklace as a birthday gift and ended up ordering one for myself the same week.",
    name: "Elena S.",
  },
  {
    quote: "Beautiful packaging, warm gold tone, and no irritation. Velmora has become my go-to gifting brand.",
    name: "Nina L.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Reviews" title="Loved for everyday glow" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-velmora-espresso/10 bg-velmora-porcelain p-7 text-velmora-espresso shadow-soft">
              <div className="mb-6 flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-8 text-velmora-espresso">
                “{review.quote}”
              </blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-clay">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
