import { Star } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Loved by our community"
          title="Words from women who wear Velmora on repeat."
          description="Short notes from customers who came for the gift and stayed for the everyday styling ritual."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-velmora-line bg-velmora-pearl p-6 text-velmora-ink shadow-velmora-sm"
            >
              <div className="flex items-center gap-1 text-velmora-bronze">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-sm leading-8 text-velmora-ink/76 md:text-base">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-velmora-ink/58">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
