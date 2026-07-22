import { Star } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const REVIEWS = [
  {
    quote: "The Golden Sphere Huggies have not left my ears in four months. They still look brand new — through showers, swims, everything.",
    name: "Amelia R.",
    detail: "Verified Buyer · Golden Sphere Huggies",
  },
  {
    quote: "I bought the Royal Heirloom Set for my sister's engagement and ended up ordering one for myself. The velvet box alone feels like a gift.",
    name: "Priya K.",
    detail: "Verified Buyer · Royal Heirloom Set",
  },
  {
    quote: "Finally, demi-fine that doesn't feel like a compromise. The Majestic Flora necklace gets more compliments than my fine jewelry.",
    name: "Sofia M.",
    detail: "Verified Buyer · Majestic Flora Nectar",
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-line bg-cream py-16 md:py-24">
      <div className="container">
        <Reveal className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
            12,000+ Five-Star Reviews
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">Loved & Lived In</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-sm border border-line bg-ivory p-7 md:p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-bronze text-bronze" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-ink-soft">{review.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
