import { Star } from 'lucide-react'
import { testimonials } from '@/data/products.js'

const Testimonials = () => (
  <section className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Notes from customers</p>
        <h2 className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Gifted, kept, loved</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((review) => (
          <article key={review.name} className="border border-velmora-linen bg-velmora-porcelain p-7 text-velmora-ink shadow-soft">
            <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-velmora text-velmora-clay">{review.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
