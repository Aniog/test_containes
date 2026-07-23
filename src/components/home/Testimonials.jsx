import Stars from '@/components/product/Stars.jsx'

const testimonials = [
  { name: 'Maya R.', text: 'The huggies feel substantial but never heavy. They look far more expensive than they are.' },
  { name: 'Claire S.', text: 'Bought the necklace as a birthday gift and kept thinking about ordering one for myself.' },
  { name: 'Nina T.', text: 'The packaging is beautiful, and the gold tone is exactly that soft vintage warmth I wanted.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">From the jewelry box</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ink">Notes from customers</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-ink/10 bg-velmora-pearl p-7 text-velmora-ink transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <Stars rating={5} />
              <p className="mt-6 font-serif text-2xl leading-snug text-velmora-ink">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
