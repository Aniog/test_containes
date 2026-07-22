import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Maya R.',
    quote: 'The Golden Sphere Huggies look far more expensive than they are. I wear them almost every day.',
  },
  {
    name: 'Claire T.',
    quote: 'I bought the necklace as a bridesmaid gift and kept one for myself. The packaging felt beautiful.',
  },
  {
    name: 'Nina S.',
    quote: 'Warm, delicate, and comfortable. Velmora has become my go-to for easy gifts that feel personal.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">Notes from customers</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="bg-velmora-porcelain p-7 text-velmora-ink shadow-sm">
              <div className="mb-5 flex gap-1 text-velmora-gold-dark" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
