import { Star } from 'lucide-react'
import { testimonials } from '@/data/products.js'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Customer notes</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">Loved, layered, gifted</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.id} className="border border-velmora-line bg-velmora-porcelain p-7 text-velmora-espresso shadow-soft">
              <div className="mb-5 flex gap-1 text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="font-serif text-2xl leading-8">“{review.text}”</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
