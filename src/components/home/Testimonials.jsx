import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "I've never received so many compliments on a piece of jewelry. The quality is incredible for the price — it looks and feels like real gold.",
    name: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She was speechless. The packaging alone made it feel so special.",
    name: 'Jessica L.',
    rating: 5,
  },
  {
    id: 3,
    text: "These are my everyday earrings now. I shower in them, sleep in them — they still look brand new after months. Obsessed.",
    name: 'Priya K.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-light">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-sm text-brand-muted font-sans leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
