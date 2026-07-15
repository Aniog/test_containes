import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Vivid Aura cuff every single day. It hasn\'t tarnished at all after 6 months. Absolutely obsessed.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Stunning quality.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'The Golden Sphere Huggies are the perfect everyday earring. Lightweight, beautiful, and they go with everything.',
    product: 'Golden Sphere Huggies',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-velvet-400 mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-velvet-500 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-obsidian-700/50 border border-obsidian-600 p-8 space-y-5">
              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={14} className="fill-velvet-400 text-velvet-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif text-lg text-cream/90 italic leading-relaxed">
                "{review.text}"
              </p>
              {/* Attribution */}
              <div className="pt-2 border-t border-obsidian-600">
                <p className="font-sans text-sm font-medium text-cream">{review.name}</p>
                <p className="font-sans text-xs text-obsidian-400 uppercase tracking-widest mt-0.5">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
