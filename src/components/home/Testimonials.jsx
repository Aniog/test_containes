import { Star } from 'lucide-react'

const testimonials = [
  {
    text: "I've never received so many compliments on a piece of jewelry. The quality is incredible for the price — it looks and feels like real gold.",
    name: 'Sarah M.',
    rating: 5,
  },
  {
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. The packaging alone is stunning, and the pieces are even more beautiful in person.",
    name: 'Jessica L.',
    rating: 5,
  },
  {
    text: "I wear my Golden Sphere Huggies every single day. They're lightweight, comfortable, and still look brand new after months of daily wear.",
    name: 'Amara K.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed italic">"{t.text}"</p>
              <p className="mt-4 text-xs uppercase tracking-product text-muted font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
