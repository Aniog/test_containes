import { testimonials } from '@/data/storeData'
import RatingStars from './RatingStars'
import SectionHeading from './SectionHeading'

const TestimonialsSection = () => {
  return (
    <section className="bg-velmora-card py-16 sm:py-20">
      <div className="velmora-shell space-y-8">
        <SectionHeading
          eyebrow="Loved by our community"
          title="Thoughtful pieces that earn repeat wear"
          description="A few of the notes we keep close from Velmora customers."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-velmora-sand bg-velmora-ivory p-8 text-center shadow-soft"
            >
              <RatingStars rating={5} centered />
              <p className="mt-5 font-display text-3xl leading-tight text-velmora-ink">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-luxe text-velmora-gold">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
