import React from 'react'
import { StarRating } from '@/components/ui/StarRating'

const reviews = [
  {
    id: 1,
    name: 'Amelia R.',
    text: 'The quality is outstanding for the price. I have sensitive ears and these are the only huggies I can wear all day without irritation. Already ordered a second pair.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sofia M.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry — and the jewelry is even more beautiful in person.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica T.',
    text: 'Understated luxury at its finest. The Luna Pearl Drops go with literally everything in my wardrobe. Fast shipping too — arrived in two days.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-surface rounded-sm p-6 md:p-8 border border-velmora-border"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-4 text-sm md:text-base leading-relaxed text-velmora-charcoal">
                “{review.text}”
              </p>
              <p className="mt-5 text-xs uppercase tracking-wider font-medium text-velmora-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
