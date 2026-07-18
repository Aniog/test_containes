import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
          Kind Words
        </p>
        <h2 className="mt-3 font-serif text-3xl text-espresso md:text-4xl">
          Loved by Our Community
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-espresso/10 bg-cream px-8 py-10 text-center"
          >
            <Quote size={24} className="text-gold" />
            <StarRating value={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-espresso">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
