import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-warm-white p-8 md:p-10 text-center relative group hover:shadow-lg transition-shadow duration-500">
              <Quote className="w-8 h-8 text-gold/20 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-stone-700 leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="w-8 h-px bg-gold/40 mx-auto mb-4" />
              <p className="text-xs uppercase tracking-nav font-medium text-stone-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
