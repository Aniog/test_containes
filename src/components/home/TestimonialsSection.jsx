import SectionHeading from '@/components/store/SectionHeading'
import { testimonials } from '@/data/storeData.js'

const TestimonialsSection = () => {
  return (
    <section className="bg-white/40 py-20 sm:py-24">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Loved by our community"
          title="A polished yes, over and over"
          description="Short notes from customers who wear Velmora for gifting, daily stacks, and quietly elevated evenings out."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[28px] border border-velmora-sand/70 bg-velmora-ivory p-6 shadow-velmora-soft"
            >
              <div className="text-velmora-gold">★★★★★</div>
              <p className="mt-5 text-base leading-7 text-velmora-mocha">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-velmora-ink">
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
