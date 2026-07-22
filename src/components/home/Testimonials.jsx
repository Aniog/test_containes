const reviews = [
  { name: 'Maya R.', text: 'The Golden Sphere Huggies look expensive, feel light, and somehow go with every neckline I own.' },
  { name: 'Alina P.', text: 'I bought the Heirloom Set as a birthday gift and the packaging felt so considered and beautiful.' },
  { name: 'Claire S.', text: 'Velmora has that quiet gold glow I wanted without feeling trendy or overdone.' },
]

const Testimonials = () => (
  <section className="bg-velmora-parchment px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Kind words</p>
        <h2 className="mt-3 font-serif text-5xl text-velmora-ink">Treasured by customers</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl border border-velmora-line bg-velmora-ivory p-7 text-velmora-ink shadow-[0_1px_0_rgba(222,209,195,0.9)]">
            <p className="text-sm tracking-[0.24em] text-velmora-champagne">★★★★★</p>
            <blockquote className="mt-5 font-serif text-2xl leading-9 text-velmora-ink">“{review.text}”</blockquote>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-velmora-taupe">{review.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
