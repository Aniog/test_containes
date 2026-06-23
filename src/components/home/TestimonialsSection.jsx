import { testimonials } from '@/data/products.js'
import StarRating from '@/components/common/StarRating.jsx'
import SectionIntro from '@/components/common/SectionIntro.jsx'

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Loved by Clients"
          title="A thoughtful finish that keeps people coming back"
          description="Three notes from customers who chose Velmora for themselves, for gifting, and for the pieces that instantly became part of their routine."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[1.75rem] border border-hairline-dark bg-base-muted p-6 text-foreground shadow-soft sm:p-8">
              <StarRating rating={5} tone="light" />
              <p className="mt-5 text-base leading-8 text-foreground/90">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-accent">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
