import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso font-medium text-center mb-12">
          What They're Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-6 md:p-8 border border-sand">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                ))}
              </div>
              <p className="text-charcoal text-sm leading-relaxed italic">"{t.text}"</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-stone">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
