import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Kind Words</h2>
          <p className="section-subtitle">From women who wear Velmora</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-8 border border-[#E8DFD3] bg-[#FFFFFF]">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="font-body text-sm text-[#8A8278] leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <p className="font-body text-xs uppercase tracking-widest text-[#1C1814]">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}