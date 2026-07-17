import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center mb-12 md:mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-serif text-base md:text-lg text-charcoal italic leading-relaxed">
                "{t.text}"
              </p>

              <p className="mt-4 text-xs font-sans font-medium uppercase tracking-widest text-muted-fg">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
