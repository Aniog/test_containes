import { testimonials } from '../../lib/store-data.js'
import RatingStars from '../shared/RatingStars.jsx'
import SectionHeading from '../shared/SectionHeading.jsx'

function TestimonialsSection() {
  return (
    <section className="page-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="What clients say"
        title="Loved for the details"
        description="Short notes from women who wanted jewelry that felt luxurious without the luxury-house markup."
        align="center"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-panel border border-velmora-line bg-white p-6 shadow-card">
            <RatingStars rating={testimonial.rating} />
            <p className="mt-5 text-base leading-8 text-velmora-ink">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs uppercase tracking-overline text-velmora-taupe">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
