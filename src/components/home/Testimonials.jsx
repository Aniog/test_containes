import { Star } from "lucide-react"

const testimonials = [
  { name: "Maya R.", text: "The huggies feel substantial but never heavy. They look far more expensive than they are." },
  { name: "Claire B.", text: "I bought the necklace as a gift and kept thinking about it, so I ordered one for myself." },
  { name: "Nadia S.", text: "Beautiful packaging, soft gold tone, and no irritation after a full day of wear." },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 text-velmora-ink sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Loved by Collectors</p>
          <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink">Quiet Compliments</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure key={review.name} className="border border-velmora-hairline bg-velmora-parchment p-7 text-velmora-ink shadow-none transition hover:shadow-soft">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-2xl font-medium leading-8 text-velmora-ink">“{review.text}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-luxe text-velmora-clay">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
