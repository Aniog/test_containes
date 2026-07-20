import { StarRating } from '@/components/ui/StarRating'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            Loved By Many
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">What Customers Say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="border border-velmora-taupe/50 bg-velmora-ivory p-8 transition-shadow duration-300 hover:shadow-md"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 text-base leading-relaxed text-velmora-charcoal">
                “{t.text}”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-velmora-stone">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
