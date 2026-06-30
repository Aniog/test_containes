import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const GOLD = '#C9A96E'

export default function Testimonials() {
  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">What They're Saying</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-linen px-8 py-8 border border-stone/15 hover:border-stone/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5" style={{ fill: GOLD, color: GOLD }} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base italic text-obsidian leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone/30 flex items-center justify-center">
                  <span className="text-xs font-sans font-medium text-driftwood">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-sans uppercase tracking-widest text-driftwood">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
