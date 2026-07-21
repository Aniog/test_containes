import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-wide-xl text-brand-gold">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-espresso mt-3">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(review => (
            <div key={review.id} className="text-center px-4 md:px-8">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="#C9A96E" stroke="#C9A96E" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Name */}
              <p className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mt-4 font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
