import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
            Love Letters
          </p>
          <h2 className="font-serif text-display-sm text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-dark rounded-lg p-6 sm:p-8 relative group hover:shadow-medium transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <p className="text-body text-warm-gray leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <div>
                <p className="text-body font-medium text-charcoal">{t.name}</p>
                <p className="text-body-sm text-warm-gray-light">
                  Purchased: {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
