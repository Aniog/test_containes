import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold mb-3">
            Loved by thousands
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(review => (
            <div key={review.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-charcoal-500 leading-relaxed mb-6 text-sm sm:text-base italic">
                "{review.text}"
              </p>

              <div>
                <p className="font-serif text-base font-medium text-charcoal">
                  {review.name}
                </p>
                <p className="text-xs text-charcoal-300 mt-1">
                  Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
