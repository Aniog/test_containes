import { StarRating } from "@/components/ui/StarRating"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The quality is incredible for the price. I wear my huggies every single day and they still look brand new.",
    rating: 5,
  },
  {
    id: 2,
    name: "Elena R.",
    text: "Bought the Royal Heirloom Set as a birthday gift and she cried. The packaging felt so premium.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maya T.",
    text: "Finally, demi-fine jewelry that doesn't turn my skin green. Obsessed with the ear cuff.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-xs uppercase tracking-[0.22em] text-primary">
          Reviews
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-foreground sm:text-4xl">
          Loved by Our Community
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-border bg-card p-8 text-card-foreground transition-shadow hover:shadow-lg"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
