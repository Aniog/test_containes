import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Real Reviews</p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium">Loved by Thousands</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream p-8 rounded-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-xs font-serif text-gold font-medium">{t.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}