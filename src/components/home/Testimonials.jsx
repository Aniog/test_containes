import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. Absolutely beautiful.",
    name: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't irritate my skin. The gold is so warm and the pieces feel special.",
    name: "Aisha K.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-surface py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-velmora-gold">LOVED BY MANY</span>
          <h2 className="serif text-4xl tracking-wide mt-2">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-velmora-bg p-8">
              <div className="stars flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-velmora-text-light leading-relaxed mb-6">"{t.text}"</p>
              <p className="text-sm tracking-wider">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
