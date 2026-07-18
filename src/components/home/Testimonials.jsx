import { StarRating } from "@/components/ui/StarRating"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="eyebrow">Loved By Many</p>
        <h2 className="heading-serif mt-3 text-4xl md:text-5xl">Kind Words</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-ink/10 bg-cream-50 px-8 py-10 text-center shadow-card"
          >
            <StarRating value={t.rating} size={16} />
            <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 font-sans text-[11px] uppercase tracking-ultra text-gold-deep">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
