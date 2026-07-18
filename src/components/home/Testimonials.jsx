import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Maya R.',
    quote: 'The huggies feel substantial but still delicate. They instantly made my usual jeans-and-knit outfit look intentional.',
  },
  {
    name: 'Elena T.',
    quote: 'I bought the floral necklace as a birthday gift and the packaging felt so much more expensive than the price point.',
  },
  {
    name: 'Sofia L.',
    quote: 'Warm gold, no irritation, and the kind of shine that looks beautiful in daylight. I have worn them nonstop.',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-velmora-cream px-4 py-16 text-velmora-ink sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">From the jewelry box</p>
          <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink md:text-6xl">Loved on arrival</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-ink/10 bg-velmora-parchment p-7 text-velmora-ink shadow-sm">
              <div className="flex gap-1 text-velmora-bronze" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
