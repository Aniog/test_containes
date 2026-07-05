import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 border border-velvet-200/60 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-velvet-700 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-velvet-900 text-xs uppercase tracking-[0.12em] font-medium mt-5">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}