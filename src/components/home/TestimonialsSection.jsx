import RatingStars from '../common/RatingStars'
import { testimonials } from '../../lib/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white/50">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Loved by customers</p>
          <h2 className="mt-4 editorial-heading">
            Premium feel, effortless wear, and gifting that lands beautifully
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="surface-card p-6 md:p-8">
              <RatingStars rating={5} />
              <p className="mt-6 text-base leading-8 text-ink/80">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-rosewood">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
