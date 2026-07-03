import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f0]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl">What Our Customers Say</h2>
          <p className="mt-2 text-sm text-current/60">Real reviews from real jewelry lovers.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-sm border border-black/5 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#b08d57]">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-current/80">"{item.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f0f0f] text-sm font-semibold text-white">
                  {item.initial}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
