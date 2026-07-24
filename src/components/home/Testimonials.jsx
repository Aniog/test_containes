import { StarRating } from '@/components/ui/StarRating'

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The packaging alone felt like a gift. My huggies have become my everyday signature — they still look brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'I bought the Royal Heirloom Set for my sister’s birthday. She cried. The quality is exceptional for the price.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ava L.',
    text: 'Quiet luxury exactly as described. The ear cuff is genius — no piercing needed and it never slips.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-sm border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <StarRating rating={t.rating} size={14} className="mb-4" />
              <p className="flex-1 text-sm leading-relaxed text-foreground">
                “{t.text}”
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
