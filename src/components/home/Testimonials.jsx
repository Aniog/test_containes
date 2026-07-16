import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-stone py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-charcoal">
            Loved by You
          </h2>
          <div className="w-10 h-px bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-taupe leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm tracking-wide text-charcoal mt-4">
                {t.name} {t.initial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}