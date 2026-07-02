import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Kind Words</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-charcoal/80 leading-relaxed italic mb-5 font-serif text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-wider uppercase text-velmora-stone font-sans">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}