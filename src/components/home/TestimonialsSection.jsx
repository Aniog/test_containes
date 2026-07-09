import { testimonials } from '@/data/products'
import SectionHeader from '@/components/common/SectionHeader'
import RatingStars from '@/components/common/RatingStars'

const TestimonialsSection = () => {
  return (
    <section className="bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Loved by our community"
          title="Quiet praise, loyal wearers"
          description="A few notes from customers who reach for Velmora when they want something polished, personal, and easy to wear."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-xl shadow-stone-900/5"
            >
              <RatingStars rating={5} light={false} />
              <p className="mt-6 font-display text-3xl leading-tight text-stone-950">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
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
