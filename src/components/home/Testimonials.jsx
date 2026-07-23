import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-dark-gray rounded-sm p-6 md:p-8">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-foreground/80 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <p className="font-sans text-xs uppercase tracking-nav text-muted-foreground">{testimonial.name}</p>
                <p className="font-serif text-xs text-primary italic">{testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
