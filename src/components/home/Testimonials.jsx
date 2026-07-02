import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it goes with everything.',
      rating: 5,
    },
    {
      name: 'Emma J.',
      text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. The packaging is gorgeous.',
      rating: 5,
    },
    {
      name: 'Lily K.',
      text: 'Finally, jewelry that doesn\'t turn my skin green! The gold plating is thick and the designs are so elegant.',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real reviews from real women</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[var(--velmora-surface)] p-6 md:p-8 border border-[var(--velmora-border-light)]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-[var(--velmora-star)] text-[var(--velmora-star)]"
                  />
                ))}
              </div>
              <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-6 italic font-serif text-lg">
                "{review.text}"
              </p>
              <p className="text-sm font-medium">{review.name}</p>
              <p className="text-xs text-[var(--velmora-text-muted)]">Verified Purchase</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
