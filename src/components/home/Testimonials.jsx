import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Loved by 12,000+ Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col items-center text-center border border-sand/70 bg-cream/50 p-8"
            >
              <Quote size={26} className="text-gold" />
              <StarRating rating={t.rating} size={14} className="mt-4" />
              <blockquote className="mt-4 font-serif text-lg italic text-ink leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
