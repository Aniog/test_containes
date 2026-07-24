import SectionHeader from '@/components/shared/SectionHeader'
import StarRating from '@/components/shared/StarRating'
import { testimonials } from '@/data/store'

const TestimonialsSection = () => {
  return (
    <section className="space-y-10">
      <SectionHeader
        eyebrow="Loved by our customers"
        title="A polished experience from box to first wear"
        description="Short notes from women who wear Velmora for gifting moments, everyday styling, and quietly dressed-up evenings."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-stone-200/80 bg-white/70 p-6 shadow-card backdrop-blur-sm"
          >
            <StarRating rating={5} light={false} />
            <p className="mt-5 text-base leading-8 text-brand-text">“{testimonial.review}”</p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.28em] text-stone-500">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
