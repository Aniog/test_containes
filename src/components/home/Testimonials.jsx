import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs tracking-section uppercase font-semibold text-gold mb-3">Kind Words</h2>
          <p className="font-serif text-3xl md:text-4xl text-base">What Our Customers Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-cream p-8 lg:p-10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 italic font-light">"{t.text}"</p>
              <p className="text-sm font-medium text-base">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
