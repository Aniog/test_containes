import SectionHeading from '@/components/common/SectionHeading'
import Stars from '@/components/common/Stars'
import { testimonials } from '@/data/storefront'

const TestimonialsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        align="center"
        eyebrow="Loved by customers"
        title="Quiet praise from our community"
        titleId="testimonials-title"
        description="Elegant enough to gift, easy enough to wear daily, and polished enough to become part of the ritual."
        descriptionId="testimonials-desc"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-[2rem] border border-velmora-line/80 bg-white/75 p-7 shadow-velmora-soft"
          >
            <Stars />
            <p className="mt-5 font-serif text-3xl leading-tight text-velmora-ink">“{testimonial.quote}”</p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.24em] text-velmora-stone">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
