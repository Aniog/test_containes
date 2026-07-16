import StarRating from '@/components/shared/StarRating.jsx'
import { testimonials } from '@/data/store.js'

function TestimonialsSection() {
  return (
    <section className="velmora-container py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="velmora-eyebrow">Testimonials</p>
        <h2 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
          Loved for how it feels and how it lasts
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl p-8 shadow-card"
          >
            <StarRating rating={5} reviewCount={5} />
            <p className="mt-6 text-base leading-8 text-velmora-truffle">“{testimonial.review}”</p>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-velmora-ink">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
