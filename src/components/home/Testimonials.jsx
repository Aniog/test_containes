import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I wear them almost every day.' },
  { name: 'Claire B.', text: 'Beautiful packaging and the necklace had the perfect soft sparkle for gifting.' },
  { name: 'Nina S.', text: 'Quiet, refined, and comfortable. The gold tone is warm without feeling flashy.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-mist px-5 py-16 text-velmora-ink md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-brass">Loved by customers</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Quiet praise</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-velmora-ink/10 bg-velmora-cream p-7 shadow-soft">
              <div className="flex gap-1 text-velmora-champagne">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-6 font-serif text-2xl leading-9 text-velmora-ink">“{review.text}”</blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-velmora-brass">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
