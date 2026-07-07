import * as React from "react"
import { StarRating } from "@/components/ui/star-rating"

const testimonials = [
  {
    id: 1,
    name: "Elena M.",
    text: "The quality is unreal for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    id: 2,
    name: "Sophia L.",
    text: "Bought the Heirloom Set as a birthday gift and she cried. The packaging alone feels like a luxury boutique.",
  },
  {
    id: 3,
    name: "Maya T.",
    text: "Finally a brand that understands quiet elegance. No loud logos, just beautiful gold that glows.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-gold">
            Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-velmora-border bg-velmora-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <StarRating rating={5} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-velmora-espresso">
                “{t.text}”
              </p>
              <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso-light">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
