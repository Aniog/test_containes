import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <StarRating rating={t.rating} />
              <p className="font-serif text-lg md:text-xl text-brand-charcoal mt-4 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-wide uppercase text-brand-muted mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
