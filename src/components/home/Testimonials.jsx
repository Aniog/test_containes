import { Star } from 'lucide-react'

const reviews = [
  { name: 'Mara L.', text: 'The Golden Sphere Huggies look far more expensive than they are. I wear them with everything.' },
  { name: 'Nina R.', text: 'Beautiful packaging, warm gold tone, and the necklace felt special without being flashy.' },
  { name: 'Elise T.', text: 'I bought one pair as a gift and came back for myself. The finish is stunning.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 text-velmora-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-sage">Customer notes</p>
          <h2 className="mt-3 font-serifDisplay text-5xl font-light">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-linen bg-velmora-porcelain p-7 text-velmora-ink transition duration-300 hover:-translate-y-1 hover:shadow-velmoraSoft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serifDisplay text-2xl leading-8 text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-sage">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
