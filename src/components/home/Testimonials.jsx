import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal tracking-wide">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-velmora-cream p-6 md:p-8 rounded-sm border border-velmora-sand/50">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-sans text-sm text-velmora-charcoal leading-relaxed">{t.text}</p>
              <p className="font-serif text-sm tracking-product text-velmora-muted mt-4 uppercase">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
