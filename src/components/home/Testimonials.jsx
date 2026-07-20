import StarRating from '@/components/StarRating'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-rust">
            Reviews
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-velmora-ink md:text-4xl">
            Loved by Real Women
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-velmora-stone bg-velmora-cream p-8 transition hover:shadow-sm"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-velmora-ink">
                “{testimonial.text}”
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-velmora-warmgray">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
