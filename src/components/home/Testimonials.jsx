import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading md:text-4xl text-brand-charcoal font-light">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center px-4">
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="font-serif text-base md:text-lg text-brand-charcoal italic leading-relaxed mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs tracking-wide uppercase text-brand-muted">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
