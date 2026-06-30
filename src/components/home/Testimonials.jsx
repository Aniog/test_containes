import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] text-accent uppercase tracking-[0.2em] mb-3">
            Reviews
          </p>
          <h2 className="section-title">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card-bg p-6 md:p-8 border border-border/50">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-sans text-sm text-base leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <p className="font-sans text-xs text-muted uppercase tracking-[0.08em]">
                &mdash; {t.name}
              </p>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card-bg border border-border/50">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-sans text-xs text-muted uppercase tracking-[0.08em]">
              4.8 average &middot; 500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
