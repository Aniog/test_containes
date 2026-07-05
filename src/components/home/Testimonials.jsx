import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-brand-border bg-white p-6 md:p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-serif text-lg text-brand-text leading-relaxed mb-6">"{item.text}"</p>
              <p className="text-sm font-semibold text-brand-text">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}