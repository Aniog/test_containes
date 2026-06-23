import { testimonials } from '@/data/products'

function Testimonials() {
  return (
    <section className="section-shell">
      <div className="mb-10 space-y-3 text-center">
        <p className="eyebrow text-amber-200">Client notes</p>
        <h2 className="font-display text-4xl text-stone-100 sm:text-5xl">
          Loved for the details that feel quietly luxurious.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article className="surface-panel flex h-full flex-col gap-5 p-7" key={testimonial.id}>
            <div className="text-amber-200">★★★★★</div>
            <p className="flex-1 text-sm leading-8 text-stone-200">
              “{testimonial.quote}”
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
              {testimonial.author}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
