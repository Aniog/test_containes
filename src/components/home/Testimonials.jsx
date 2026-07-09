import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-4 py-16 text-velmora-espresso sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-goldDark">
            Notes from customers
          </p>
          <h2 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">
            Loved quietly, worn often
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="border border-velmora-stone bg-velmora-ivory p-7 shadow-card">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-velmora-ink">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-velmora-espresso">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
