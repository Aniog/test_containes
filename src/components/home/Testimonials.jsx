import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-text-primary">
            What They Say
          </h2>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-muted-gold text-muted-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-text-primary italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-text-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
