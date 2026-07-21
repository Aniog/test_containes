import { testimonials } from '@/data/products'
import { StarRating } from '@/components/ui/StarRating'

export function Testimonials() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Loved By You</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink">Words From Our Community</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center bg-cream px-8 py-10 text-center shadow-soft"
            >
              <StarRating rating={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-lg md:text-xl italic text-ink leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
