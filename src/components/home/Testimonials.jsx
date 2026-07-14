import { reviews } from '@/data/products'
import StarRating from '@/components/product/StarRating'

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">Customer notes</p>
          <h2 className="mt-3 font-serif text-5xl font-medium md:text-7xl">Quietly adored</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-linen bg-white/40 p-7 shadow-soft">
              <StarRating rating={5} compact />
              <p className="mt-6 font-serif text-2xl leading-9 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-velmora-sage">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
