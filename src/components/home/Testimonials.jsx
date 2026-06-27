import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Loved by Many
        </p>
        <h2 className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">
          Words from Our Wearers
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col items-center border border-velmora-line bg-velmora-cream px-8 py-10 text-center"
          >
            <StarRating value={t.rating} size={16} />
            <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-velmora-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-velmora-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
