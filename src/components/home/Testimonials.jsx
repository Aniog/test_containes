import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-light">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg text-charcoal italic leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="font-sans text-xs uppercase tracking-wider-custom text-stone-500 font-medium">
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
