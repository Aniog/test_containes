import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-4">What Our Customers Say</h2>
          <p className="text-[#78716C] max-w-xl mx-auto">
            Real stories from real women who wear Velmora every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="text-center p-6 md:p-8 bg-[#FAFAF9] rounded-xl"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="text-[#57534E] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="font-serif text-sm text-[#1C1917]">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
