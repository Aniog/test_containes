import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-12 text-center sm:mb-16">
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
          Loved By Thousands
        </p>
        <h2 className="font-serif text-4xl font-light text-ink sm:text-5xl">
          What They're Saying
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, i) => (
          <figure
            key={t.id}
            className="flex flex-col items-center border border-sand bg-ivory px-8 py-10 text-center animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <StarRating value={t.rating} size={16} />
            <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
