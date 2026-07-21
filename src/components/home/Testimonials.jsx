import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-base">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-gold mb-3">
            Kind Words
          </h2>
          <p className="font-serif text-3xl md:text-4xl font-medium text-cream">What Our Customers Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-cream/80 leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-gold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
