import { Star } from 'lucide-react'
import { testimonials } from '@/data/products.js'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-velmora-cream p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="font-sans text-sm text-velmora-ink leading-relaxed flex-1">
                "{t.text}"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-warmgray mt-6">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}