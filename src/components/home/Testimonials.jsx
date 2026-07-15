import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">Loved By You</p>
        <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">Kind Words</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-sand bg-cream-deep px-8 py-10 text-center"
          >
            <Quote size={24} className="text-gold-soft" />
            <StarRating rating={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-charcoal">
              "{t.text}"
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
