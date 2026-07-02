import React from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">What Our Customers Say</h2>
          <p className="text-muted text-sm">Real reviews from real Velmora lovers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-card border border-border p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-6 h-6 text-accent/30 mx-auto mb-4" />
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-border'}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-muted font-medium">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
