import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-10 md:mb-14">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-charcoal leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-nav font-medium text-stone-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
