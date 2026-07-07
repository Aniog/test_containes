import Stars from '@/components/ui/Stars'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/products'

function TestimonialsSection() {
  return (
    <section className="bg-stone-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Loved by Our Community"
          title="Quiet luxury, confirmed by women who wear Velmora on repeat."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm shadow-stone-950/5"
            >
              <Stars rating={5} />
              <p className="mt-5 font-serif-display text-2xl leading-9 text-stone-950">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.34em] text-stone-500">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
