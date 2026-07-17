import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-stone-100 rounded-sm p-6 sm:p-8 text-center shadow-soft"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#C9A96E"
                    className="text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base sm:text-lg text-stone-700 leading-relaxed italic mb-5">
                "{review.text}"
              </blockquote>

              {/* Author */}
              <p className="text-[13px] font-medium text-stone-900">
                {review.name}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                Verified Buyer · {review.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
