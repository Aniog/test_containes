import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "I've received so many compliments on my Amber Lace earrings. The quality is incredible for the price — they look and feel like fine jewelry.",
    name: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.",
    name: 'Jessica L.',
    rating: 5,
  },
  {
    id: 3,
    text: "These are my everyday earrings now. The Golden Sphere Huggies are so comfortable and the gold hasn't tarnished at all after months of daily wear.",
    name: 'Priya K.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-sm text-brand-charcoal/80 font-sans leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs tracking-widest-plus uppercase text-brand-taupe font-sans font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
