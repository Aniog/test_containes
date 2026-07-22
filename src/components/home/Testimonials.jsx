import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-100 tracking-wide">
            What They Say
          </h2>
          <p className="font-sans text-sm text-stone-400 mt-3 tracking-wider uppercase">
            Real reviews from real customers
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif italic text-lg md:text-xl text-stone-200 leading-relaxed">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <p className="font-sans text-sm text-velmora-gold mt-6 tracking-wider uppercase">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
