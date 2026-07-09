import SectionHeading from '@/components/ui/SectionHeading'
import Stars from '@/components/ui/Stars'
import { testimonials } from '@/data/products'

const TestimonialsSection = () => (
  <section className="bg-velmora-ivory py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Loved by customers"
        title="A few words from the Velmora circle"
        description="Premium details, wearable styling, and gifting moments that keep earning repeat orders."
        align="center"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-velmora-line bg-velmora-pearl p-8 shadow-card"
          >
            <Stars className="mb-6" />
            <p className="font-display text-3xl leading-10 text-velmora-ink">
              “{testimonial.quote}”
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-mist">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
