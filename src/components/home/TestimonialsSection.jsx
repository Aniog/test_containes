import { Star } from 'lucide-react'
import SectionIntro from '@/components/shared/SectionIntro'
import { testimonials } from '@/data/products'

function TestimonialsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Loved by customers"
          title="Short notes from women who wanted their jewelry to feel special, daily"
          description="A premium look, a comfortable wear, and thoughtful presentation from first click to first unboxing."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-3xl border border-velmora-sand/35 bg-white p-7 shadow-soft"
            >
              <div className="flex gap-1 text-velmora-champagne">
                {[0, 1, 2, 3, 4].map((item) => (
                  <Star key={item} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-aubergine/85">“{testimonial.text}”</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-velmora-espresso">
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
