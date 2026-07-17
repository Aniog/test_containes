import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-3">
            Loved by Thousands
          </h2>
          <p className="text-sm text-brand-muted">
            Join 10,000+ women who wear Velmora daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white border border-brand-sand/50 p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <p className="text-sm text-brand-charcoal leading-relaxed mb-4 italic">
                "{t.text}"
              </p>

              <p className="text-xs font-medium text-brand-muted uppercase tracking-wider">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
