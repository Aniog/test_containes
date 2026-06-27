import { Star } from "lucide-react"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Kind Words</p>
          <h2 className="text-3xl md:text-4xl text-charcoal font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
            Loved by Our Customers
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-8 border border-hairline bg-surface">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-star fill-star" />
                ))}
              </div>
              <p className="text-taupe text-sm leading-relaxed mb-6 italic font-light">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-charcoal font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}