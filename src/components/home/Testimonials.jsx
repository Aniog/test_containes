import React from "react"
import { Star } from "lucide-react"

const REVIEWS = [
  {
    name: "Amelia R.",
    rating: 5,
    quote:
      "The Golden Sphere huggies are the only earrings I never take off. Warm gold, no green, no tarnish — six months in and they still look brand new.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Charlotte M.",
    rating: 5,
    quote:
      "I ordered the Royal Heirloom set for my sister's birthday. The box, the weight, the detail — it felt like something four times the price.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Sofia K.",
    rating: 5,
    quote:
      "Finally, demi-fine that doesn't feel cheap. The Vivid Aura cuff gets me more compliments than any of my fine jewelry. I bought one in gold and one in silver.",
    product: "Vivid Aura Jewels",
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-champagne-deep">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-cream section-pad">
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="kicker">Kind words</p>
          <h2 className="mt-3 headline-md text-espresso max-w-xl mx-auto">
            Trusted by women who wear their jewelry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="flex flex-col bg-cream-deep p-8 md:p-10 border border-taupe"
            >
              <Stars count={r.rating} />
              <blockquote className="mt-6 font-serif text-[19px] leading-relaxed text-espresso flex-1">
                "{r.quote}"
              </blockquote>
              <footer className="mt-8 pt-6 border-t border-taupe">
                <p className="font-sans text-[12px] tracking-[0.18em] uppercase text-espresso">
                  {r.name}
                </p>
                <p className="mt-1 font-serif text-[14px] text-mink">
                  on the {r.product}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
