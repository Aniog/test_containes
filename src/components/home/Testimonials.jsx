import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">Kind Words</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Loved by Our Community</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col items-center border border-ink/10 bg-cream-soft px-8 py-10 text-center shadow-card"
          >
            <StarRating rating={t.rating} size={16} />
            <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-ink-muted">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
