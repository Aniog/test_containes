import { testimonials } from '@/data/store'
import SectionHeading from '@/components/ui/SectionHeading'

function TestimonialsSection() {
  return (
    <section className="bg-pearl py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the details that make gifting feel elevated"
          description="A few notes from women who wear Velmora for themselves and for the people they love."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[28px] border border-line bg-ivory p-6 shadow-card md:p-7"
            >
              <div className="text-champagne">★★★★★</div>
              <p className="mt-5 text-base leading-8 text-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-truffle">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
