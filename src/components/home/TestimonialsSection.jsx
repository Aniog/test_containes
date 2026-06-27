import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-cream/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
            Reviews
          </p>
          <h2 className="font-serif text-3xl font-light tracking-wide text-velmora-espresso md:text-4xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center rounded-sm bg-velmora-ivory p-8 text-center shadow-sm"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-5 text-sm leading-relaxed text-velmora-warm-gray">
                "{t.text}"
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-velmora-espresso">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
