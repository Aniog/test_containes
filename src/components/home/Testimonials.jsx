import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Elena R.',
    text: 'The Golden Sphere Huggies have not left my ears since they arrived. The weight, the warmth — they feel far more expensive than they were.',
  },
  {
    name: 'Maya T.',
    text: 'I gifted my mother the Royal Heirloom Set and she cried. The box, the gold, the detail. It felt truly special without being loud.',
  },
  {
    name: 'Sofia L.',
    text: 'Majestic Flora is the most complimented necklace I own. Delicate but present. I wear it every single day.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-champagne-deep mb-3">
            Loved by Many
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Worn & Adored</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="text-center px-4 md:px-2"
            >
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest3 text-stone">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
