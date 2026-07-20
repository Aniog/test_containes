import StarRating from '@/components/product/StarRating.jsx'

const reviews = [
  { name: 'Amelia R.', quote: 'The huggies feel substantial without being heavy. They look far more expensive than they are.' },
  { name: 'Nina S.', quote: 'I bought the necklace as a gift and kept one for myself. The packaging is beautiful.' },
  { name: 'Clara M.', quote: 'Soft gold tone, no irritation, and the kind of piece I wear from work to dinner.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">In their words</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-t-[2rem] border border-velmora-stone bg-velmora-pearl p-7 shadow-soft">
              <StarRating rating={5} reviews={0} compact />
              <p className="mt-6 font-serif text-2xl font-medium leading-8 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
