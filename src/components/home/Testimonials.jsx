import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold" fill="#B8860B" />
                ))}
              </div>
              <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 font-sans text-xs tracking-wider uppercase text-brand-charcoal">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
