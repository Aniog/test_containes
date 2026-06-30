import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function Testimonials() {
  const [revealRef, revealed] = useScrollReveal()

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div ref={revealRef} className={`max-w-7xl mx-auto px-4 md:px-8 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-900 tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-cream p-8 rounded-sm transition-all duration-700"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: revealed ? `${i * 150}ms` : '0ms',
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed mb-6 italic font-light">
                "{t.text}"
              </p>

              <p className="font-serif text-sm tracking-wide text-stone-900">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
