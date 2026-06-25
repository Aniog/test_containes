import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I have never received so many compliments on a pair of earrings. The quality is exceptional for the price.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica L.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging is gorgeous too.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'These huggies are my everyday go-to. Comfortable, stylish, and they have not tarnished after months of wear.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-espresso leading-relaxed mb-4 italic font-serif text-lg">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-taupe font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
