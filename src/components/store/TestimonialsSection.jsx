import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '@/data/storeData'

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the details that make every order feel considered."
          description="Short notes from customers who wear Velmora for gifting moments, daily styling, and everything in between."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="rounded-[2rem] border border-velmora-mist/70 bg-white/80 p-7 text-velmora-ink shadow-soft"
            >
              <div className="flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-muted">
                “{review.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
