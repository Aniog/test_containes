import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-warm-black text-3xl md:text-4xl font-light uppercase tracking-[0.15em]">
            What They Say
          </h2>
          <div className="w-12 h-px bg-muted-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(item => (
            <div key={item.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-muted-gold fill-muted-gold" />
                ))}
              </div>
              <p className="text-warm-gray text-sm md:text-base leading-relaxed italic font-light">
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="mt-4 text-warm-black text-xs uppercase tracking-[0.2em] font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
