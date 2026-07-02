import { Star } from 'lucide-react'

const reviews = [
  {
    text: 'The quality is unreal for the price. My Amber Lace Earrings have become my daily signature piece. I forget I\'m wearing them — until someone compliments them.',
    name: 'Sophia L.',
    product: 'Amber Lace Earrings',
  },
  {
    text: 'I bought the Royal Heirloom Set for my sister\'s wedding and she cried. The gift box alone felt like a $200+ experience. Will be back for more.',
    name: 'Priya K.',
    product: 'Royal Heirloom Set',
  },
  {
    text: 'Finally — demi-fine that actually looks and feels luxurious. The Golden Sphere Huggies are substantial, shiny, and zero irritation on my sensitive ears.',
    name: 'Lauren M.',
    product: 'Golden Sphere Huggies',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding page-container py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-text-muted mb-4">
          Love Notes
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text">
          From Our Customers
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="text-center px-4">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold"
                />
              ))}
            </div>
            <p className="text-sm text-velmora-text-secondary leading-relaxed mb-5 italic">
              &ldquo;{r.text}&rdquo;
            </p>
            <p className="text-xs font-medium tracking-wider uppercase text-velmora-text mb-1">
              {r.name}
            </p>
            <p className="text-[11px] text-velmora-text-muted">
              on {r.product}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}