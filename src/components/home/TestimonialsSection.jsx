import { Star } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const TestimonialsSection = ({ testimonials }) => (
  <section className="bg-cream-100 py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Loved by clients"
        title="Reviews that read like a personal recommendation."
        description="Short, sincere notes from women who bought a piece for themselves and ended up ordering again for someone else."
        align="center"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-velvet-200/70 bg-cream-50 p-8 shadow-editorial"
          >
            <div className="mb-5 flex gap-1 text-gold-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
              ))}
            </div>
            <p className="text-base leading-7 text-velvet-800">“{testimonial.quote}”</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-velvet-700">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
