import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-mega-wide uppercase text-brand-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-heading text-brand-cream">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-graphite p-8 md:p-10 border border-brand-divider/5 hover:border-brand-gold/20 transition-colors duration-500"
            >
              <Quote className="w-8 h-8 text-brand-gold/30 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-brand-cream/80 leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-divider/10">
                <div>
                  <p className="text-sm font-sans text-brand-cream tracking-wider">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">
                    on {testimonial.product}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-xs text-brand-gold font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
