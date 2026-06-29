import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide font-light text-velmora-deep">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-accent text-velmora-accent" />
                ))}
              </div>
              <p className="text-sm md:text-base text-velmora-muted leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="mt-4 text-xs font-medium tracking-[0.1em] uppercase text-velmora-deep">
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
