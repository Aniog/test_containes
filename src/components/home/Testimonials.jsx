import React from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: 'The quality is incredible for the price. I\'ve been wearing my Vivid Aura earrings every day for months and they still look brand new.',
    },
    {
      id: 2,
      name: 'Emma L.',
      rating: 5,
      text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.',
    },
    {
      id: 3,
      name: 'Jessica R.',
      rating: 5,
      text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The hypoallergenic claim is real! Plus, they look so much more expensive than they are.',
    },
  ]

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-padding">
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-6 md:p-8 space-y-3 md:space-y-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-xs md:text-sm font-medium tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
