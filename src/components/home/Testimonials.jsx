import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies feel expensive without being precious. I have worn them every day this month.' },
  { name: 'Leah S.', quote: 'Beautiful packaging and the gold tone is warm, not yellow. It made such an easy birthday gift.' },
  { name: 'Nina K.', quote: 'Subtle, polished, and comfortable. Velmora has become my go-to for small luxuries.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-ink sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">Notes from customers</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">Softly Loved</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-sand/70 bg-velmora-pearl p-7 text-velmora-ink shadow-velmora">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-ui text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
