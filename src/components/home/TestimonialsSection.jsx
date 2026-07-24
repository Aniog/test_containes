import { Star } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const TestimonialsSection = ({ testimonials }) => (
  <section className="px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="Loved by customers"
        title="What she says after opening the box"
        description="Short notes from customers who came for the quiet shine and stayed for the quality, comfort, and giftable finish."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-stone-200/10 bg-stone-900/60 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-6 flex gap-1 text-amber-200">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="font-display text-3xl leading-tight text-stone-50">
              “{testimonial.quote}”
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-400">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
