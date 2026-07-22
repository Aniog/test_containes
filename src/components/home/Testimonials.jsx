import { StarRating } from '@/components/ui/StarRating'
import { testimonials } from '@/data/products'

export function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Reviews
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light md:text-5xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="border border-hairline bg-white p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={review.rating} size={16} />
              <p className="mt-6 font-serif text-xl font-light italic leading-relaxed text-espresso">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-warm-gray">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
