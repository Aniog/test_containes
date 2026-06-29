import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-warm-cream">
            What They Say
          </h2>
          <div className="w-12 h-px bg-warm-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4 py-8">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-warm-gold text-warm-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg text-warm-cream/90 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-warm-tan font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
