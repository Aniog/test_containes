import React from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-ivory-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-caption tracking-ultra-wide uppercase text-gold mb-2 font-sans">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-surface-900">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-white p-6 lg:p-8 rounded-xl border border-surface-100 animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-gold-light mb-4" strokeWidth={1} />
              <p className="text-body text-surface-700 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-surface-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-body font-medium text-surface-900">{t.name}</p>
                    <p className="text-body-sm text-surface-500">{t.product}</p>
                  </div>
                  <StarRating rating={t.rating} size="xs" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
