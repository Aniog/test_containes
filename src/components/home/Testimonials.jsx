import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? 'text-gold-400 fill-gold-400' : 'text-velvet-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-onyx-900">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 lg:p-8 border border-velvet-100 hover:shadow-lg transition-shadow duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="font-sans text-sm text-onyx-700 leading-relaxed mt-4 mb-6">
                "{review.text}"
              </p>
              <div>
                <p className="font-sans text-sm font-medium text-onyx-900">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-onyx-400 mt-0.5">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
