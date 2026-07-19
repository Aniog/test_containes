import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-light">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 border border-stone-200 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-gold text-gold' : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-stone-600 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <p className="font-serif text-sm font-medium text-stone-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Verified Buyer · {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
