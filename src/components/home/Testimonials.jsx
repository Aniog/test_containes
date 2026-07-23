import Rating from '@/components/product/Rating'

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="velmora-container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Notes from customers</p>
          <h2 className="serif-display mt-3 text-5xl text-velmora-ink md:text-7xl">Loved in the everyday</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="border border-velmora-sand bg-velmora-pearl p-7 text-velmora-ink shadow-sm">
              <Rating compact />
              <p className="mt-6 font-serif text-2xl leading-9 text-velmora-ink">“{item.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
