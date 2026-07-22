import { Star } from 'lucide-react'
import { testimonials } from '@/data/products.js'

export default function Testimonials() {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Notes from customers</p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-velmora-espresso md:text-6xl">Loved for everyday luminosity</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.author} className="border border-velmora-mist bg-velmora-ivory p-8 text-velmora-espresso shadow-sm">
              <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-serif text-2xl leading-9 text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-burnished">{review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
