import { Star } from 'lucide-react'
import { testimonials } from '@/data/products.js'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Love notes</p>
          <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Quiet luxury, loudly loved</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-linen bg-velmora-ivory p-7 shadow-[0_12px_38px_rgba(23,19,15,0.04)]">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
