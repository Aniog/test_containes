import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-foreground">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.name} className="bg-surfaceAlt p-6 md:p-8 border border-hairline">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-foreground leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-foregroundMuted mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
