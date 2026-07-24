import { Star } from "lucide-react"

const REVIEWS = [
  {
    name: "Amelia R.",
    initial: "A",
    rating: 5,
    body: "I've worn the Golden Sphere Huggies every day for six months. The finish still looks brand new — they're the first pair I reach for.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Priya M.",
    initial: "P",
    rating: 5,
    body: "The Royal Heirloom Set was a gift for my sister. The packaging alone made her cry. The jewelry — she hasn't taken it off.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Sofia L.",
    initial: "S",
    rating: 5,
    body: "Finally, demi-fine that actually feels fine. The Majestic Flora necklace has a real weight to it, and the chain is substantial without being heavy.",
    product: "Majestic Flora Nectar",
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-gold text-gold"
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Loved by Thousands</p>
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-5xl">
            Words from the people who wear it
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="flex flex-col border border-line-light bg-bone p-8 md:p-10"
            >
              <Stars count={review.rating} />
              <p className="mt-6 flex-1 font-display text-2xl font-light leading-snug text-ink md:text-[26px]">
                "{review.body}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs uppercase tracking-[0.18em] text-paper"
                >
                  {review.initial}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-text-muted">
                    On the {review.product}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
