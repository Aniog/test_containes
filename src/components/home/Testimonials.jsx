import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-charcoal tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-champagne-gold text-champagne-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif text-base md:text-lg text-warm-gray-700 italic leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              {/* Name */}
              <p className="font-sans text-xs tracking-super-wide uppercase text-deep-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
