import { Star } from 'lucide-react'
import { testimonials } from '../../lib/data'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 border-t border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-light mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div key={review.id} className="text-center px-4 md:px-6 py-8 border border-sand bg-linen/30">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 font-light leading-relaxed text-sm mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="text-xs uppercase tracking-wider text-taupe font-sans">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
