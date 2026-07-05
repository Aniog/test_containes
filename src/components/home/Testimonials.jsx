import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Testimonials = () => {
  const [sectionRef, revealed] = useScrollReveal()

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 bg-velmora-cream sr-hidden ${revealed ? 'sr-visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sr-stagger">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4 py-6">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-velmora-muted leading-relaxed italic font-light">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-nav text-velmora-charcoal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
