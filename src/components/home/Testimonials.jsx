import React from "react"
import { Star } from "lucide-react"

const REVIEWS = [
  {
    id: "review-amelia",
    name: "Amelia R.",
    quote:
      "I bought the Vivid Aura cuff on a whim and wear it almost every day. The gold has held its color for months — and I haven't taken it off in the shower. (Sorry, not sorry.)",
    product: "Vivid Aura Jewels",
  },
  {
    id: "review-jordan",
    name: "Jordan M.",
    quote:
      "Gifted the Royal Heirloom Set to my sister. The box, the ribbon, the note card — it genuinely felt like opening something special. She hasn't stopped wearing it.",
    product: "Royal Heirloom Set",
  },
  {
    id: "review-sade",
    name: "Sade O.",
    quote:
      "The Golden Sphere huggies are the only jewelry I forget I'm wearing — in the best way. Substantial but light, and they go with literally everything I own.",
    product: "Golden Sphere Huggies",
  },
]

function Stars() {
  return (
    <div
      className="flex items-center gap-0.5 text-champagne-300"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="container-velmora py-20 md:py-28"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Loved by 4,000+ wearers</p>
        <h2 id="reviews-title" className="editorial-h2 mt-3">
          What our community says
        </h2>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {REVIEWS.map((review) => (
          <figure
            key={review.id}
            className="flex flex-col border-t border-sand-200 pt-7"
          >
            <Stars />
            <blockquote className="mt-5 flex-1 font-serif text-[20px] leading-snug text-espresso sm:text-[22px]">
              <p>"{review.quote}"</p>
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-1">
              <span className="font-sans text-[13px] font-medium text-espresso">
                {review.name}
              </span>
              <span className="font-sans text-[12px] uppercase tracking-widest2 text-stone-300">
                On the {review.product}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
