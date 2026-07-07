import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal mb-3">
            What Our Customers Say
          </h2>
          <p className="text-sm text-velmora-stone">
            Real reviews from real women.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-ivory p-8 sm:p-10 border border-velmora-sand/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-velmora-graphite leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-velmora-sand/50 pt-4">
                <p className="text-sm font-medium text-velmora-charcoal">{review.name}</p>
                <p className="text-xs text-velmora-stone mt-0.5">
                  on {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
