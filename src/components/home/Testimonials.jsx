import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import { StarRating } from "@/components/ui/star-rating"

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
          Loved by Thousands
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          Words from Our Clients
        </h2>
        <div className="mt-5 h-px w-16 bg-gold" />
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col items-center rounded-none border border-line bg-cream px-8 py-10 text-center shadow-soft"
          >
            <Quote className="h-7 w-7 text-gold" />
            <StarRating rating={t.rating} size={15} className="mt-4" />
            <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
