import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-warm-gray-light mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-heading-lg text-charcoal">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-6 md:p-8 rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    className="text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm md:text-[15px] text-warm-gray leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">{t.name}</p>
                  <p className="text-xs text-warm-gray-light">Purchased: {t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
