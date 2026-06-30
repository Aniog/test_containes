import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div key={review.id} className="bg-cream p-6 md:p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="#B8860B" stroke="#B8860B" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-charcoal font-sans leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Name */}
              <p className="mt-4 text-xs font-sans font-semibold text-muted uppercase tracking-wide">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
