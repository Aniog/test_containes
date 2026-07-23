import { Quote } from 'lucide-react'
import { testimonials } from '@/data/storefront'
import RatingStars from './RatingStars'

export default function TestimonialsSection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="editorial-card p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Loved quietly</p>
            <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">What customers are saying</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted">
            Thoughtful notes from customers who wear Velmora for gifting, daily polish, and everything in between.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-3xl border border-line/60 bg-parchment p-6">
              <Quote className="h-7 w-7 text-gold" />
              <div className="mt-5">
                <RatingStars rating={5} />
              </div>
              <p className="mt-5 text-base leading-7 text-ink">“{item.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-button text-muted">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
