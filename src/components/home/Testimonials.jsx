import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-ultra-wide text-gold mb-3 block">
            HAPPY CUSTOMERS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso-800">
            Love Letters from You
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-espresso-800/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-espresso-800">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-espresso-800">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
