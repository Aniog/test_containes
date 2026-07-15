import { testimonials } from '@/data/storeData'
import SectionHeading from '@/components/ui/SectionHeading'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved for the details that feel luxurious in person."
        description="From packaging to wearability, these are the things our customers mention again and again."
        align="center"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="rounded-[2rem] border border-velmora-sand bg-velmora-ivory p-8 shadow-velmora-soft">
            <div className="flex gap-1 text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-display text-3xl leading-tight text-velmora-ink">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-velmora-taupe">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
