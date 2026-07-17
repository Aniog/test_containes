import React from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    { name: "Sophia R.", text: "The quality far exceeds the price. My Golden Sphere huggies haven't left my ears in weeks." },
    { name: "Eleanor W.", text: "I bought the Royal Heirloom Set for my sister's wedding. It was absolutely stunning in person." },
    { name: "Maya S.", text: "Shipping was incredibly fast and the packaging felt so premium. A perfect self-gift." }
  ]

  return (
    <section className="py-32 bg-[#FAF7F5] px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-serif text-xl italic leading-relaxed text-foreground/80">
              "{review.text}"
            </p>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
