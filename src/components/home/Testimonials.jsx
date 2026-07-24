import { Star, Quote } from "lucide-react"
import { TESTIMONIALS } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-cream/60 border border-sand/60 p-8 md:p-10 text-center flex flex-col items-center"
            >
              <Quote className="w-7 h-7 text-gold/50 mb-5" strokeWidth={1} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
