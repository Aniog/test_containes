import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 md:p-10 relative group hover:shadow-lg transition-shadow duration-500"
            >
              <Quote size={32} className="text-gold/30 mb-4" strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A96E" className="text-gold" />
                ))}
              </div>

              <p className="text-charcoal text-sm md:text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="border-t border-light-gray pt-4">
                <p className="font-serif text-charcoal text-lg">{testimonial.name}</p>
                <p className="text-xs text-warm-gray mt-0.5">Verified Buyer — {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
