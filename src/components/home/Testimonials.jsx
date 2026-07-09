import React from 'react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
            Loved by thousands
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-cream p-6 md:p-8 rounded-sm shadow-soft hover:shadow-card-hover transition-shadow duration-300"
            >
              <StarRating rating={review.rating} size={14} className="mb-4" />
              <p className="font-sans text-sm text-base leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-base">
                    {review.name}
                  </p>
                  <p className="font-sans text-2xs text-muted">
                    on {review.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
