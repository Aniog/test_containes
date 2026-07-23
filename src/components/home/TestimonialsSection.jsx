import { Star } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeader
        align="center"
        description="Loved for their flattering finish, comfort, and gift-ready presentation."
        eyebrow="Reviews"
        title="What Customers Are Saying"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
            key={testimonial.id}
          >
            <div className="flex gap-1 text-amber-600">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star className="h-4 w-4 fill-current" key={`${testimonial.id}-${index}`} />
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-stone-700">“{testimonial.quote}”</p>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-stone-500">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
