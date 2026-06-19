import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-3">Reviews</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-[0.15em]">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="text-center p-6 md:p-8 bg-[hsl(var(--surface))] rounded-sm border border-[hsl(var(--border))]">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                ))}
              </div>
              <p className="text-[hsl(var(--foreground-secondary))] leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
