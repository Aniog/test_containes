import { Star } from "lucide-react"
import { TESTIMONIALS } from "../../data/products"

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-light tracking-[0.05em]">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="border border-brand-warm p-8 lg:p-10 bg-brand-light"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-serif text-base sm:text-lg text-brand-dark leading-relaxed italic mb-6">
                "{t.text}"
              </p>

              {/* Name */}
              <p className="font-sans text-sm font-medium text-brand-dark uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}