import SectionHeader from '@/components/storefront/SectionHeader'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Loved by Our Community"
          title="What customers are saying"
          description="A few notes from women styling Velmora for everyday wear, milestone gifting, and evening plans."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[1.75rem] border border-velmora-stone/15 bg-white p-6 shadow-soft"
            >
              <div className="mb-5 flex gap-1 text-velmora-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="text-sm leading-8 text-velmora-stone">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ink">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
