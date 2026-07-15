import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import Stars from "@/components/ui/Stars"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-editorial px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Kind Words</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Loved by Thousands</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col items-center border border-champagne bg-white px-8 py-10 text-center"
          >
            <Quote className="h-7 w-7 text-champagne" strokeWidth={1} />
            <Stars rating={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 text-[11px] uppercase tracking-widest2 text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
