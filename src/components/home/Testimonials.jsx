import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-white border-t border-warm-border">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-sans text-xs tracking-section uppercase text-muted mb-3">
            Kind Words
          </h2>
          <p className="font-serif text-3xl md:text-4xl text-warm-dark font-light">
            What Our Customers Say
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-sans text-sm text-warm-dark font-light leading-relaxed mb-4">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="font-serif text-sm tracking-product uppercase text-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
