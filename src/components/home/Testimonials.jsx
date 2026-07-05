import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 tracking-wide text-center mb-10 md:mb-14">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-6 md:p-8 rounded-sm border border-charcoal-100"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-charcoal-700 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-medium tracking-wide uppercase text-charcoal-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
