import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Maya R.',
    quote: 'The huggies look expensive, feel light, and arrived wrapped like a gift to myself.',
  },
  {
    name: 'Claire B.',
    quote: 'Quiet, warm, and beautifully made. My Flora necklace has become my everyday piece.',
  },
  {
    name: 'Nina K.',
    quote: 'I bought the set for my sister and immediately ordered earrings for me too.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 text-velmora-ink sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-antique">Customer notes</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">Softly spoken, often loved.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[1.5rem] border border-velmora-hairline bg-velmora-porcelain p-7 text-velmora-ink shadow-editorial">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-taupe">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
