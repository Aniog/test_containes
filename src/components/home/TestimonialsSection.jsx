import { Star } from "lucide-react"
import { testimonials } from "@/data/store"
import SectionHeading from "@/components/shared/SectionHeading"

const TestimonialsSection = () => {
  return (
    <section className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for thoughtful gifting and polished everyday wear"
          description="A few words from women who come to Velmora for pieces that look elevated, feel comfortable, and arrive beautifully presented."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-velvet/10 bg-ivory p-8 text-velvet shadow-soft"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              <p className="mt-6 font-serif text-3xl leading-tight text-velvet">“</p>
              <p className="mt-1 text-base leading-7 text-velvet/78">{testimonial.quote}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-gold">
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
