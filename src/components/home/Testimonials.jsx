import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-widest2 text-gold">Kind Words</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
          Loved by Thousands
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-line bg-cream px-8 py-10 text-center"
          >
            <StarRating value={t.rating} size={16} />
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
