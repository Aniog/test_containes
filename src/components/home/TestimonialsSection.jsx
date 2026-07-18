import { testimonials } from '@/data/products.js'
import Stars from '@/components/common/Stars.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'

export default function TestimonialsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 rounded-[2rem] bg-[var(--color-card)] px-6 py-10 md:px-8 md:py-12">
        <SectionHeading
          eyebrow="Loved by Clients"
          title="Thoughtful reviews from our community"
          description="From gifting moments to daily uniform dressing, Velmora pieces are chosen for how beautifully they wear in real life."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[1.75rem] border border-[var(--color-line-light)] bg-[var(--color-surface-light)] p-6 text-[var(--color-text-light)]"
            >
              <Stars />
              <p className="mt-5 text-base leading-8 text-[var(--color-text-light)]">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[var(--color-muted-light)]">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
