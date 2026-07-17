import Stars from '@/components/product/Stars'

const testimonials = [
  { name: 'Maya R.', text: 'The huggies feel substantial but never heavy. They look far more expensive than they are.' },
  { name: 'Clara M.', text: 'I bought the set as a birthday gift and the packaging was beautiful enough to hand over as-is.' },
  { name: 'Nina S.', text: 'Soft gold, no irritation, and the necklace layers perfectly with my everyday chain.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-porcelain px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Kind words</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">Quietly adored</h2>
          </div>
          <p className="text-sm leading-7 text-velmora-cocoa">Rated by customers who wanted premium detail without the boutique markup.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[1.75rem] border border-velmora-linen bg-velmora-pearl p-7 shadow-velmora-soft text-velmora-espresso">
              <Stars rating={5} compact />
              <p className="mt-5 font-serif text-2xl leading-8 text-velmora-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
