import { testimonials } from '@/data/store'
import SectionHeading from '@/components/shared/SectionHeading'
import Stars from '@/components/shared/Stars'

const TestimonialsSection = () => (
  <section className="border-y border-stone-200 bg-stone-100 py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        align="center"
        eyebrow="Client notes"
        title="What women love about Velmora."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
          >
            <Stars value={5} />
            <p className="mt-5 font-['Cormorant_Garamond'] text-3xl leading-tight text-stone-950">
              “{testimonial.quote}”
            </p>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-stone-500">
              {testimonial.author}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
