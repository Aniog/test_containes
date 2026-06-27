import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Kind Words</h2>
          <p className="text-sm text-velmora-500 mt-2">Hear from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-warm-white p-6 md:p-8 rounded-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-sm md:text-base text-velmora-700 leading-relaxed italic serif-heading font-normal">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs text-velmora-500 mt-4 tracking-[0.06em] uppercase font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}