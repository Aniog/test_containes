import { testimonials } from '@/data/store.js'
import SectionHeading from '@/components/shared/SectionHeading.jsx'

function TestimonialsSection() {
  return (
    <section className="bg-stone-100/70 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Collected from women who wear them often"
          description="Short notes from customers who came for the glow and stayed for the everyday ease."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_18px_50px_rgba(28,25,23,0.06)]"
            >
              <div className="text-amber-300">★★★★★</div>
              <p className="mt-6 font-display text-3xl leading-10 text-stone-900">
                “{review.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-500">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
