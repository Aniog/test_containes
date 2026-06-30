import SectionHeading from '@/components/ui/SectionHeading'
import Stars from '@/components/ui/Stars'
import { testimonials } from '@/data/products'

const TestimonialsSection = () => (
  <section className="section-space bg-stone-100/70">
    <div className="page-shell">
      <SectionHeading
        eyebrow="Loved by Customers"
        title="A polished little ritual, according to them."
        description="From gifting moments to everyday styling, these are the details customers mention again and again."
        align="center"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/40">
            <Stars />
            <p className="mt-5 text-base leading-8 text-stone-700">“{testimonial.review}”</p>
            <p className="mt-6 text-xs uppercase tracking-[0.32em] text-stone-500">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
