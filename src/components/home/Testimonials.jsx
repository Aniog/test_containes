import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    body: "I wear the Golden Sphere huggies every day — they go from office to dinner without a thought. The gold has not dulled in six months.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Priya K.",
    body: "Bought the Royal Heirloom set for my sister's birthday. The packaging alone made it feel like a true keepsake. She has not taken it off.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Ava L.",
    body: "The Vivid Aura ear cuff is the first piece of demi-fine I've owned that genuinely looks like fine jewelry. Quietly perfect.",
    product: "Vivid Aura Jewels",
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Loved By 12,000+</span>
          <h2
            id="home-testimonials-title"
            className="h-section mt-3 text-4xl text-espresso md:text-5xl"
          >
            What people are saying
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="border-t border-hairline pt-6"
            >
              <Stars />
              <blockquote className="mt-5 font-serif text-xl leading-snug text-espresso md:text-2xl">
                "{r.body}"
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-espresso">
                  {r.name}
                </p>
                <p className="mt-1 text-xs text-taupe">
                  on the {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
