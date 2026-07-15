import StarRating from "@/components/ui/StarRating"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="font-sans text-xs uppercase tracking-widest2 text-gold">
          Loved by Many
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Words from Our Community
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col items-center border border-ink/10 bg-cream px-8 py-10 text-center"
          >
            <StarRating value={t.rating} size={16} />
            <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 font-sans text-xs uppercase tracking-widest2 text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
