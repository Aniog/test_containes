import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-stone-50 rounded-sm"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="font-serif text-amber-700 font-semibold">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-stone-900 font-medium">
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

export default Testimonials
