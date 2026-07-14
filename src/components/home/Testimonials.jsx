import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold">Kind Words</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Loved by Thousands
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-hairline bg-ivory px-8 py-10 text-center"
          >
            <StarRating rating={t.rating} size={16} />
            <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
