import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed italic font-light">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-medium text-muted-fg uppercase tracking-wide">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
