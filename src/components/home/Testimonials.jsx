import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 hairline">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] font-light">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-sm border border-[#2A2A2A] bg-[#111111]/50 hover:bg-[#111111] transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#C9A96E] fill-[#C9A96E]"
                  />
                ))}
              </div>

              <p className="text-sm text-[#A0988E] leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <p className="text-xs text-[#F5F0EB] font-medium tracking-wider uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}