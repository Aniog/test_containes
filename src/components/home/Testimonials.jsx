import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Elena K.', quote: 'I bought the set as a birthday gift and the packaging felt so thoughtful and elevated.' },
  { name: 'Priya S.', quote: 'Warm, delicate, and comfortable. The necklace has become my everyday layer.' },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Loved by collectors</p>
        <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em] text-velmora-espresso sm:text-5xl">Quiet compliments, daily.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-[1.7rem] border border-velmora-line bg-velmora-porcelain p-7 text-velmora-espresso shadow-soft">
            <div className="flex gap-1 text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-serif text-2xl leading-9 text-velmora-espresso">“{review.quote}”</p>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-bronze">{review.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
