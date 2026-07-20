import React from 'react'
import { Star } from 'lucide-react'

const REVIEWS = [
  { id: 1, text: "The quality is simply stunning. I wear my Golden Sphere huggies every single day and they haven't tarnished one bit.", name: "Sarah M." },
  { id: 2, text: "Finally, jewelry that looks high-end but doesn't break the bank. The packaging was also so beautiful, felt like true luxury.", name: "Elena R." },
  { id: 3, text: "I've received so many compliments on my Amber Lace earrings. Perfect editorial aesthetic for everyday wear.", name: "Jessica T." },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="text-center flex flex-col items-center">
              <div className="flex space-x-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
