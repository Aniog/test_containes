import { Star } from 'lucide-react'
import { testimonials } from '@/data/storefront'

export default function TestimonialsSection() {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="velmora-kicker">Loved by our community</p>
        <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">Words from women who wear Velmora well.</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[1.8rem] border border-velmora-sand/60 bg-velmora-cream p-6 shadow-velmora"
          >
            <div className="mb-5 flex items-center gap-1 text-velmora-bronze">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-base leading-8 text-velmora-cocoa/80">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-velmora-cocoa/60">{testimonial.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
