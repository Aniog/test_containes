import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-3">
            Real Reviews
          </p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 p-6 md:p-8 rounded-sm border border-ink-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-ink-600 text-sm md:text-base leading-relaxed font-sans mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase text-ink-400 font-sans">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}