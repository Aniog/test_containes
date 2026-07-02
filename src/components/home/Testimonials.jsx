import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-5 max-w-xs font-serif text-xl italic leading-snug text-espresso-900">
        “{testimonial.text}”
      </p>
      <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-espresso-600">
        {testimonial.name}
      </p>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Loved By You
          </p>
          <h2 className="mt-3 font-serif text-4xl text-espresso-900 md:text-5xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
