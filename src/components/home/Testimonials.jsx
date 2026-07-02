import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Real Reviews</span>
          <h2 className="section-title mt-3">Loved by Thousands</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-sm border border-taupe/50">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-secondary text-sm md:text-base leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="mt-6 pt-4 border-t border-taupe/50">
                <span className="font-serif text-sm text-charcoal tracking-wide">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}