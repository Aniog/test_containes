import React from 'react'
import { Star } from 'lucide-react'
import { reviews } from '@/data/products'

export default function Testimonials() {
  const displayed = reviews.slice(0, 3)

  return (
    <section className="section-padding py-20 md:py-28 bg-white">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-4">
          Love Notes
        </p>
        <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-brand-base mb-4">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {displayed.map((review) => (
          <div key={review.id} className="text-center px-4">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-brand-gold fill-brand-gold"
                />
              ))}
            </div>
            <p className="text-brand-muted leading-relaxed italic mb-6 font-serif text-lg">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-xs tracking-widest uppercase text-brand-base font-medium">
              {review.name} {review.initial}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
