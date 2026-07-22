import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-caption uppercase tracking-mega-wide text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-heading-1 text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-soft-white p-8 lg:p-10 rounded border border-charcoal/5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'text-gold fill-gold' : 'text-warm-gray-light'}
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-body text-charcoal leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-charcoal/8 pt-4">
                <p className="text-body font-medium text-charcoal">
                  {t.name}
                </p>
                <p className="text-body-sm text-warm-gray mt-0.5">
                  Verified Buyer · {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
