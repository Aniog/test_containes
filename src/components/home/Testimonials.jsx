import { Quote } from "lucide-react"
import Reveal from "@/components/ui/Reveal"
import StarRating from "@/components/ui/StarRating"

const REVIEWS = [
  {
    id: "review-amelia",
    name: "Amelia K.",
    rating: 5,
    quote:
      "I’ve worn my Golden Sphere Huggies every day since they arrived — they still look brand new. Quietly the best jewelry purchase I’ve made.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "review-sofia",
    name: "Sofia R.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom set for my sister’s birthday. The packaging alone made her tear up. The jewelry, even more so.",
    product: "Royal Heirloom Set",
  },
  {
    id: "review-noor",
    name: "Noor M.",
    rating: 5,
    quote:
      "Finally — gold jewelry that doesn’t turn my ears green. The Vivid Aura cuff is everything.",
    product: "Vivid Aura Jewels",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow">From Our Customers</span>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl text-espresso tracking-tight">
            Words We Treasure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review, idx) => (
            <Reveal key={review.id} delay={idx * 100}>
              <figure className="relative h-full bg-white border border-hairline p-8 md:p-10 flex flex-col">
                <Quote
                  size={28}
                  strokeWidth={1}
                  className="text-gold-deep mb-5"
                />
                <StarRating value={review.rating} size={14} />
                <blockquote className="mt-4 font-serif text-lg md:text-xl leading-relaxed text-espresso">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-6 border-t border-hairline">
                  <p className="text-sm font-medium text-espresso">{review.name}</p>
                  <p className="mt-1 text-[11px] tracking-[0.22em] uppercase text-muted">
                    On {review.product}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}