import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Testimonials = () => {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-warm-black">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id} className={`text-center px-4 reveal-hidden ${isVisible ? 'reveal-visible' : ''} reveal-delay-${i + 1}`}>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-stone leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] font-medium text-warm-black">
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
