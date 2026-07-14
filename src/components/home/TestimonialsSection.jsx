import { testimonials } from '@/data/products'
import SectionHeader from '@/components/shared/SectionHeader'
import RatingStars from '@/components/shared/RatingStars'

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeader
        eyebrow="Loved by Customers"
        title="Words that feel as considered as the pieces"
        description="A few notes from customers who came for the polish and stayed for the wearability."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-[0_18px_40px_rgba(28,25,23,0.05)] md:p-7"
          >
            <RatingStars rating={5} reviews={5} />
            <p className="mt-5 font-serif text-3xl leading-tight text-stone-950">
              “{testimonial.quote}”
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
