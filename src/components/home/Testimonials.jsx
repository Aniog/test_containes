import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies feel substantial but still delicate. They look far more expensive than they are.' },
  { name: 'Elena P.', quote: 'I bought the necklace as a gift and ended up ordering one for myself the next morning.' },
  { name: 'Nora S.', quote: 'Beautiful packaging, warm gold tone, and no irritation after wearing them all day.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.8fr_2fr] md:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">Notes from customers</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-ink">Loved for gifting and keeping.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="border border-velmora-linen bg-velmora-pearl p-6 text-velmora-ink shadow-soft">
                <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-velmora-bronze">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
