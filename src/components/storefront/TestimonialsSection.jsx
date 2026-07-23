import { testimonials } from '../../data/storefront.js'
import ReviewStars from './ReviewStars.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function TestimonialsSection() {
  return (
    <section className="bg-[var(--velmora-ivory)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8">
        <SectionHeading
          align="center"
          eyebrow="Loved by customers"
          id="testimonials-title"
          title="Quiet luxury, confirmed by the women wearing it."
          description="Short, warm reviews from first-time gifters and everyday repeat buyers alike."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-[1.8rem] border border-stone-200 bg-[var(--velmora-cream)] p-6 shadow-soft">
              <ReviewStars rating={5} />
              <p className="mt-5 text-base leading-8 text-[var(--velmora-ink)]">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone-500">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
