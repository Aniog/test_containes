import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-brand-warm-white p-8 lg:p-10 border border-brand-divider-light relative group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-brand-gold/30 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < testimonial.rating
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-divider-light'
                    }
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-brand-charcoal leading-relaxed mb-8 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-brand-divider-light pt-6">
                <p className="font-serif text-sm text-brand-charcoal tracking-wider">
                  {testimonial.name}
                </p>
                <p className="text-xs text-brand-muted-light mt-1">
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
