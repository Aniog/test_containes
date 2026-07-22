import { TESTIMONIALS } from "@/data/products"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-20 md:py-28 border-t border-espresso-800/5">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">From Our Community</p>
          <h2
            id="testimonials-title"
            className="mt-3 font-serif text-4xl md:text-5xl text-espresso-800"
          >
            Treasured by <span className="italic">thousands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-cream-50 p-8 md:p-10 flex flex-col h-full"
            >
              <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" strokeWidth={1} />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl md:text-[22px] text-espresso-800 leading-snug text-pretty flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-espresso-800/10">
                <p className="text-sm text-espresso-800 font-medium">
                  {t.name}
                </p>
                <p className="text-[11px] uppercase tracking-widest2 text-ink-muted mt-1">
                  Verified Buyer
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
