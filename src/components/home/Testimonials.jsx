import { Star } from "lucide-react"

const REVIEWS = [
  {
    id: "review-1",
    quote:
      "I wear the Golden Sphere Huggies almost every day. They look far more expensive than they are and the gold hasn't faded at all.",
    name: "Amelia R.",
    rating: 5,
    product: "Golden Sphere Huggies",
  },
  {
    id: "review-2",
    quote:
      "Bought the Royal Heirloom Set as a gift — the packaging alone made me cry. The jewelry is even more beautiful in person.",
    name: "Priya K.",
    rating: 5,
    product: "Royal Heirloom Set",
  },
  {
    id: "review-3",
    quote:
      "Finally, demi-fine that actually feels demi-fine. The weight, the finish, the way it catches the light. I'm hooked.",
    name: "Sophie M.",
    rating: 5,
    product: "Majestic Flora Necklace",
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-accent text-accent"
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 border-t border-line">
      <div className="container-site">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow" id="testimonials-eyebrow">
            Loved by Thousands
          </p>
          <h2
            id="testimonials-title"
            className="display text-3xl md:text-5xl mt-3"
          >
            What our community says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="bg-surface border border-line p-8 md:p-10 flex flex-col"
            >
              <Stars count={r.rating} />
              <blockquote
                id={`${r.id}-quote`}
                className="mt-6 font-serif text-xl md:text-2xl text-ink-primary leading-snug text-balance flex-1"
              >
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line">
                <p
                  id={`${r.id}-name`}
                  className="font-sans text-sm font-medium text-ink-primary"
                >
                  {r.name}
                </p>
                <p className="mt-1 font-sans text-[11px] uppercase tracking-eyebrow text-ink-muted">
                  Verified · {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
