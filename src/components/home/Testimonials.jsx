import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold/50 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 md:p-10 border border-stone/10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              {/* Quote */}
              <p className="font-cormorant text-lg text-ink leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/50" />
                <span className="font-inter text-xs uppercase tracking-widest text-stone">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
