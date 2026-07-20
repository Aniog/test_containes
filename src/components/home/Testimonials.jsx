import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Love notes</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Treasured by Customers</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="border border-velmora-sand bg-velmora-pearl p-7 text-velmora-espresso shadow-[0_18px_60px_rgba(33,25,21,0.06)]">
              <div className="mb-5 flex gap-1 text-velmora-champagne" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-snug text-velmora-espresso">“{review.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso/60">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
