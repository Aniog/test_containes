import { testimonials } from '@/data/products.js'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import StarRating from '@/components/common/StarRating.jsx'

const TestimonialsSection = () => {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Client notes"
            title="Words from the Velmora circle"
            description="A few of the details customers mention most: comfort, finish, packaging, and the polished feeling of wearing them every day."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
              <StarRating rating={5} />
              <p className="mt-5 text-base leading-8 text-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
