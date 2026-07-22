import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sophia M.',
    text: 'The Golden Sphere Huggies are my new everyday staple. So comfortable I forget I\'m wearing them, and the gold finish is stunning.',
    rating: 5,
  },
  {
    name: 'Emma J.',
    text: 'I bought the Royal Heirloom Set as a gift for myself after a promotion. It arrived in the most beautiful packaging — felt like pure luxury. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Claire B.',
    text: 'The quality of the Vivid Aura cuff is incredible for the price. I\'ve gotten so many compliments. Already planning my next purchase!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-velvet-surface">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-2">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-text">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-velvet-border rounded-sm p-6 md:p-8 bg-velvet-bg/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velvet-gold text-velvet-gold" />
                ))}
              </div>
              <p className="text-velvet-muted font-sans text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs uppercase tracking-wider text-velvet-text font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}