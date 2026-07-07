import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-white p-8 md:p-10 border border-warm-border">
      <Stars count={t.rating} />
      <p className="text-sm md:text-base text-[#1a1a1a] mt-5 leading-relaxed">
        &ldquo;{t.text}&rdquo;
      </p>
      <p className="text-xs font-medium tracking-wider uppercase text-taupe mt-6">
        {t.name}
      </p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] font-semibold">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}