import { Star } from 'lucide-react'

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Notes from customers</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Quietly Obsessed</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure key={review.name} className="border border-velmora-mist bg-velmora-ivory p-7 text-velmora-espresso shadow-soft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-9 text-velmora-espresso">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
