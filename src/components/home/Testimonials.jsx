import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4 md:px-6">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-muted text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="mt-4 text-xs tracking-widest uppercase text-charcoal font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
