import React from 'react'
import Stars from '@/components/Stars'

const REVIEWS = [
  {
    name: 'Elena R.',
    text: 'The Golden Sphere Huggies haven’t left my ears in three months. They look far more expensive than they were.',
    rating: 5,
  },
  {
    name: 'Maya T.',
    text: 'Bought the Royal Heirloom Set as an anniversary gift. The box alone made it feel like a real heirloom. She hasn’t taken it off.',
    rating: 5,
  },
  {
    name: 'Sofia L.',
    text: 'I have sensitive skin and these are the first gold earrings that don’t irritate me. Beautiful, warm, and genuinely everyday.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-velmora">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Worn & Loved</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">
            From Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="text-center px-4 md:px-6 py-8 border-t border-linen"
            >
              <Stars rating={r.rating} size={16} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed italic">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-taupe">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
