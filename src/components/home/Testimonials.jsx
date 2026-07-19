import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Kind Words</span>
        <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">Loved by Many</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-ink/10 bg-cream px-7 py-9 text-center"
          >
            <Quote className="h-6 w-6 text-gold" strokeWidth={1} />
            <StarRating rating={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
