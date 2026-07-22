import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-charcoal italic leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-product uppercase text-warm-gray">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
