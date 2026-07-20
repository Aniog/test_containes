import { StarRating } from '@/components/ui/StarRating'

const reviews = [
  {
    name: 'Sophia M.',
    text: 'The most elegant pieces I own. The huggies haven\'t left my ears in weeks.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Bought the Heirloom Set as a gift and ended up ordering one for myself. Stunning packaging.',
    rating: 5,
  },
  {
    name: 'Ava L.',
    text: 'Quiet luxury at a price that actually makes sense. Already planning my next order.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-velmora-light py-16 md:py-24">
      <div className="container-velmora">
        <h2 className="text-center font-serif text-3xl text-velmora-dark md:text-4xl">
          Loved by You
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="border border-velmora-hairline bg-white p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-velmora-dark">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-velmora-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
