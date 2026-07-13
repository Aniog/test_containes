import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-charcoal leading-relaxed italic">
                "{t.text}"
              </p>
              {/* Author */}
              <p className="mt-4 text-xs font-medium text-muted uppercase tracking-wider">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
