import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold" fill="#C9A96E" />
                ))}
              </div>

              <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <p className="mt-4 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
