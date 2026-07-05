import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-32 border-t border-ink/8">
      <div className="container-velmora">
        <div className="text-center mb-10 md:mb-16">
          <p className="eyebrow mb-3 md:mb-4">Loved by Thousands</p>
          <h2 className="display-headline text-3xl md:text-5xl text-ink">
            What our wearers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="bg-cream-elevated border border-ink/8 p-7 md:p-9 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-gold text-gold"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-ink leading-relaxed mb-6 flex-1">
                “{t.quote}”
              </p>
              <div className="pt-5 border-t border-ink/8">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-light mt-1">
                  On the {t.product}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
