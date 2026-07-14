import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-warm-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-sm text-warm-800/60 tracking-wide">
            Real reviews from real women.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 border border-cream-300/80 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-gold-500" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-warm-800/80 leading-relaxed mb-5 italic">
                "{review.text}"
              </p>

              {/* Customer info */}
              <div className="border-t border-cream-300 pt-4">
                <p className="text-sm font-medium text-warm-900">{review.name}</p>
                <p className="text-xs text-warm-800/50 mt-0.5">Verified Buyer — {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
