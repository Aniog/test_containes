import { TESTIMONIALS } from '@/data/products'
import { StarRating } from '@/components/ui/StarRating'

export function Testimonials() {
  return (
    <section className="border-y border-vel-border bg-white py-16 md:py-24">
      <div className="container-vel">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
            Reviews
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl">Loved by Thousands</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <StarRating rating={t.rating} size={16} className="mb-4" />
              <p className="mb-5 font-serif text-xl font-light italic leading-relaxed text-vel-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <span className="mt-auto text-xs font-semibold uppercase tracking-widest text-vel-muted">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
