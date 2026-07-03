import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollAnimation } from '@/lib/useScrollAnimation'

export default function Testimonials() {
  const [sectionRef, isVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} className="section-padding bg-ivory">
      <div className="container-wide">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-black font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`text-center px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${i * 150 + 200}ms` : '0ms' }}
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-warm-tan leading-relaxed italic font-light">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs tracking-[0.1em] uppercase text-warm-black font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
