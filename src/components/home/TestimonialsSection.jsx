import { testimonials } from '../../data/store.js'
import RatingStars from '../shared/RatingStars.jsx'
import SectionHeading from '../shared/SectionHeading.jsx'

const TestimonialsSection = () => {
  return (
    <section className="bg-obsidian px-6 py-16 text-pearl md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer Notes"
          title="Loved for the details"
          description="A few words from women collecting Velmora for gifting, self-purchase, and every polished in-between."
          inverse
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-sand/20 bg-pearl/5 p-6 shadow-card backdrop-blur"
            >
              <RatingStars rating={5} reviews={5} light />
              <p className="mt-5 font-display text-3xl leading-snug text-pearl">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-sand">
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
