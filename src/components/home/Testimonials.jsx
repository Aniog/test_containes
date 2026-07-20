import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies feel expensive without being precious. I wear them with everything.' },
  { name: 'Claire B.', quote: 'Gift packaging was beautiful, and the necklace looked even warmer in person.' },
  { name: 'Nina L.', quote: 'Quiet sparkle, no irritation, and the gold tone is exactly what I wanted.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-sand bg-velmora-porcelain p-7 shadow-soft">
              <div className="mb-5 flex text-velmora-gold">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
