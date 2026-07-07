import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-text-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-charcoal border border-velmora-stone/30 px-7 py-8"
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg italic text-velmora-text-light leading-relaxed mb-6">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-muted">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
