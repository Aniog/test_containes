import { testimonials } from "@/data/products"
import StarRating from "@/components/StarRating"

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream">
            Loved by You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-surface p-6 md:p-8 border border-divider"
            >
              <StarRating rating={5} />
              <p className="mt-4 text-cream/90 font-light leading-relaxed">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-cream-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
