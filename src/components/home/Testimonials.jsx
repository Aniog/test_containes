import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies look far more expensive than they are. I wear them almost every day.' },
  { name: 'Claire B.', quote: 'The packaging felt so thoughtful. It made a birthday gift feel personal and polished.' },
  { name: 'Nina S.', quote: 'Warm gold, lightweight, and no irritation. Finally jewelry that feels quietly special.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Loved by our customers</p>
          <h2 className="mt-3 font-serif text-5xl font-medium">Notes from the jewelry box</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-velmora-espresso/10 bg-white/45 p-7 shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-8 text-velmora-espresso">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
