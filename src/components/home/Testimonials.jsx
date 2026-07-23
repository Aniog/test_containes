import { Star } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"

const REVIEWS = [
  {
    name: "Amelia R.",
    rating: 5,
    text: "The Golden Sphere huggies are impossibly comfortable. I forget I'm wearing them — and then I catch a glimpse in a mirror and smile.",
  },
  {
    name: "Sofia T.",
    rating: 5,
    text: "Bought the Royal Heirloom set for my sister's birthday. The packaging alone made me cry. The jewelry, even more so.",
  },
  {
    name: "Naomi K.",
    rating: 5,
    text: "Finally, demi-fine that doesn't look cheap. The Majestic Flora necklace has lived on my dresser for two months and I reach for it weekly.",
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-current" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, visible] = useReveal()
  return (
    <section
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} bg-ink text-bone`}
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p
            id="testi-eyebrow"
            className="text-[11px] tracking-widest3 uppercase text-bone/60"
          >
            Kind words
          </p>
          <h2
            id="testi-title"
            className="mt-3 font-serif text-[36px] md:text-[48px] leading-[1.05]"
          >
            Worn, gifted, returned to.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col p-7 md:p-8 border border-bone/10 bg-ink-soft"
            >
              <Stars count={r.rating} />
              <blockquote className="mt-5 font-serif text-[20px] md:text-[22px] leading-[1.35] text-bone">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-[12px] tracking-widest2 uppercase text-bone/60">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
