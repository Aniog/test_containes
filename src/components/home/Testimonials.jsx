import { Quote } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { TESTIMONIALS } from "@/data/products"
import { cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  const [ref, inView] = useReveal({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-bone" aria-labelledby="testimonials-heading">
      <div className="container-editorial">
        <header className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow-gold mb-3">Loved by Thousands</p>
          <h2
            id="testimonials-heading"
            className={cn(
              "font-serif text-4xl sm:text-5xl text-ink font-light tracking-tight transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
          >
            From the people who wear them
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.id}
              className={cn(
                "bg-bone-2 p-7 sm:p-8 rounded-sm relative transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
              style={{ transitionDelay: inView ? `${i * 90}ms` : "0ms" }}
            >
              <Quote
                size={28}
                strokeWidth={1.2}
                className="absolute top-6 right-6 text-gold/40"
                aria-hidden="true"
              />
              <StarRating value={t.rating} size={13} />
              <blockquote className="mt-4 font-serif text-lg sm:text-xl text-ink leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-sm font-sans">
                <span
                  className="h-8 w-8 rounded-full bg-gold/30 text-ink inline-flex items-center justify-center font-serif text-sm"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span className="text-ink">{t.name}</span>
                <span className="text-muted-2">· Verified Buyer</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
