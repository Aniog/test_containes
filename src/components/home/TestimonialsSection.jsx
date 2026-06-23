import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import SectionHeading from '@/components/storefront/SectionHeading'

const TestimonialsSection = () => {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="What they're saying"
        title="Loved for the finish, the feel, and the everyday ease"
        copy="A few notes from customers who wear Velmora for both self-purchase and thoughtful gifting."
        align="center"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-[2rem] border border-line bg-pearl p-6 shadow-float sm:p-8">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={`${testimonial.name}-${index}`} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-6 text-lg leading-8 text-ink">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs uppercase tracking-caps text-muted">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
