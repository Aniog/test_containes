import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Testimonials = () => {
  const [ref, revealed] = useScrollReveal()

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${revealed ? 'revealed' : ''}`}>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">What Our Customers Say</h2>
          <div className={`w-12 h-px bg-velmora-gold mx-auto mt-4 ${revealed ? 'line-expand' : ''}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.id} className={`text-center px-4 reveal reveal-delay-${i + 1} ${revealed ? 'revealed' : ''}`}>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-base sm:text-lg text-velmora-charcoal italic leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="text-sm font-sans text-velmora-muted tracking-wider uppercase">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
