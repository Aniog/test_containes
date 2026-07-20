import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container-padding">
        <h2 className="serif-heading text-4xl md:text-5xl text-center mb-12">What They Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="serif-heading text-xl md:text-2xl italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
