import { testimonials } from '@/data/site'
import RatingStars from '@/components/shared/RatingStars'
import SectionHeading from '@/components/shared/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Client notes"
          title="Loved for the details"
          description="A few of the words we hear most often from customers wearing Velmora."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-3xl border border-champagne bg-pearl p-8 shadow-card"
            >
              <div className="space-y-6">
                <RatingStars rating={5} />
                <p className="text-base leading-8 text-espresso">“{testimonial.quote}”</p>
                <p className="text-sm uppercase tracking-[0.18em] text-mocha">{testimonial.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
