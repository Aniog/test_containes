import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Testimonials = () => {
  const { ref: revealRef, revealed } = useScrollReveal(0.1)

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div ref={revealRef} className={`max-w-content mx-auto px-4 md:px-6 transition-all duration-1000 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cardwhite p-6 md:p-8 border border-borderwarm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gold/30">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-sans text-sm text-warmgray leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              {/* Name */}
              <p className="font-serif text-sm tracking-product uppercase text-charcoal">
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
