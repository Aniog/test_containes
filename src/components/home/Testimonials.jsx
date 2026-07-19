import Rating from '@/components/common/Rating'

const reviews = [
  { name: 'Maya L.', text: 'The huggies feel expensive but still easy enough for every day. I have not taken them off.' },
  { name: 'Elena R.', text: 'Beautiful packaging and the gold tone is warm, not brassy. Perfect birthday gift.' },
  { name: 'Priya S.', text: 'Subtle sparkle, elegant proportions, and no irritation on sensitive ears.' },
]

const Testimonials = () => (
  <section className="bg-velmora-ivory px-5 py-20 text-velmora-ink md:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold-deep">Notes from customers</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">Quietly adored</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-[2rem] border border-velmora-line bg-velmora-mist p-8 text-velmora-ink shadow-sm">
            <Rating className="mb-6" />
            <p className="font-serif text-2xl font-medium leading-9 text-velmora-ink">“{review.text}”</p>
            <p className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold-deep">{review.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
