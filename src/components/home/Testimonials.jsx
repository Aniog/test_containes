import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-20 text-velmora-ink sm:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Notes from customers</p>
          <h2 className="serif-title mt-3 text-5xl sm:text-6xl">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-[2rem] border hairline bg-velmora-ivory p-7 text-velmora-ink shadow-soft">
              <div className="flex text-velmora-champagne" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" strokeWidth={1.4} />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-luxury text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
