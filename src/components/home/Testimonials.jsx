import Rating from '@/components/common/Rating.jsx'

const reviews = [
  { name: 'Mara L.', text: 'The huggies feel substantial but never heavy. They look far more expensive than they are.' },
  { name: 'Elena R.', text: 'I bought the necklace as a birthday gift and kept borrowing it before wrapping it.' },
  { name: 'Nina S.', text: 'Soft, golden, and beautifully packaged. It feels like a quiet luxury ritual.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-4 pb-20 text-velmora-ink sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl border-y border-velmora-champagne/30 py-14">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Customer notes</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold">Loved for everyday glow.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="bg-velmora-parchment p-7 text-velmora-ink">
              <Rating rating={5} reviews={1} compact />
              <p className="mt-5 font-serif text-2xl leading-9 text-velmora-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-stone">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
