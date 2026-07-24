import { Star } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading'

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Loved by Velmora customers"
          title="Reviews that feel as warm as the pieces themselves"
          description="A few notes from women styling Velmora for gifting, dinner dates, and everyday polish."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/70 p-7 text-velmora-ink shadow-velmora"
            >
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-3xl leading-tight text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist">
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
