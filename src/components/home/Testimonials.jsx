import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">What They Say</h2>
          <div className="hairline w-24 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center p-6 md:p-8 bg-velmora-surface rounded-sm">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg italic text-velmora-text mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-sans text-xs tracking-wide-luxury uppercase text-velmora-text-light">
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
