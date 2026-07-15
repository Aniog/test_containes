import SectionHeader from '@/components/shared/SectionHeader'
import Stars from '@/components/shared/Stars'

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="bg-stone-50 py-16 text-stone-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Loved by customers"
          title="A polished experience from box to wear"
          description="Short notes from women building their daily jewelry uniform with Velmora."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_40px_rgba(28,24,19,0.06)]"
            >
              <Stars />
              <p className="mt-5 text-base leading-8 text-stone-700">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-stone-500">
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
