import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-champagne font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(review => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-champagne text-champagne" strokeWidth={0} />
                ))}
              </div>
              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-charcoal font-light leading-relaxed italic flex-1">
                "{review.text}"
              </blockquote>
              {/* Author */}
              <div className="mt-6 pt-6 border-t border-divider">
                <p className="font-sans text-xs tracking-widest uppercase font-semibold text-warm-stone">
                  — {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
