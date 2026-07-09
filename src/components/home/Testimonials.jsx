import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', quote: 'The Golden Sphere Huggies look far more expensive than they are. They never leave my ears.' },
  { name: 'Elena K.', quote: 'I bought the Heirloom Set as a birthday gift and the packaging felt truly premium.' },
  { name: 'Sofia M.', quote: 'Soft, elegant shine. The pieces feel thoughtful rather than trendy, which I love.' },
]

export default function Testimonials() {
  return (
    <section className="bg-stone-50 py-16 text-stone-950 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Notes from customers
          </p>
          <h2 className="mt-3 font-serif text-5xl text-stone-950 md:text-7xl">
            Quietly adored
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-amber-200 bg-amber-50 p-7 text-stone-950 shadow-sm">
              <div className="flex gap-1 text-amber-700" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-9 text-stone-950">
                “{review.quote}”
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.26em] text-stone-500">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
