import { Star } from "lucide-react"
import { testimonials } from "../../data/products"

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.15em] text-warm-gold font-medium mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-charcoal font-light">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-6 sm:p-8 rounded-sm border border-dark-ivory/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-warm-gold fill-warm-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-5 font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.1em] text-charcoal/50 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}