import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(item => (
            <div key={item.id} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-0.5 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-stone-600 font-sans leading-relaxed italic mb-4">
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
