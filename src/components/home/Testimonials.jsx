import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-blush-pale/50">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider uppercase text-truffle-800">
            Loved by You
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C8A96E" />
                ))}
              </div>
              <p className="text-truffle-600 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-xs tracking-widest uppercase text-truffle-500 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
