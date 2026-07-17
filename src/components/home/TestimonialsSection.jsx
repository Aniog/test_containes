import { testimonials } from '../../data/products'
import RatingStars from '../shared/RatingStars'
import SectionHeading from '../shared/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="section-frame">
        <SectionHeading
          eyebrow="Client Notes"
          title="Loved for the glow, the feel, and the gift-worthy finish"
          description="A few of the messages that keep finding their way into our inbox.
"
          titleId="testimonials-title"
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[28px] border border-velmora-ink/10 bg-white/70 p-7 shadow-card"
            >
              <RatingStars rating={5} className="mb-5" />
              <p className="text-base leading-8 text-velmora-cocoa">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-luxe text-velmora-truffle">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
