import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-heading-lg text-warm-black">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C6A355" className="text-gold" />
                ))}
              </div>

              <p className="text-muted-text leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-warm-black">{testimonial.name}</p>
                <p className="text-xs text-warm-gray mt-0.5">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
