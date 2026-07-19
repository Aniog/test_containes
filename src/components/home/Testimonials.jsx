import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-taupe font-sans font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">
            Words From Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm font-sans text-espresso/80 leading-relaxed italic mb-4">
                "{t.text}"
              </p>
              <p className="text-xs tracking-wider uppercase text-taupe font-sans font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
