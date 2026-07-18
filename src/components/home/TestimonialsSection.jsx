import { Star } from 'lucide-react'
import { reviews } from '@/data/storefront'

export function TestimonialsSection() {
  return (
    <section className="bg-velmora-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">
            Loved for quality, gifting, and everyday ease.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[2rem] border border-velmora-line bg-white/70 p-8 shadow-soft"
            >
              <div className="flex gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-3xl leading-tight text-velmora-espresso">
                “{review.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-velmora-truffle">
                {review.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
