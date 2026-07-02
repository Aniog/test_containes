import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">Customer Love</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">What They're Saying</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-parchment px-8 py-10 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" stroke="none" />
                ))}
              </div>
              {/* Quote mark */}
              <p className="font-cormorant text-5xl text-gold/30 leading-none mb-2 font-light">"</p>
              <p className="font-cormorant text-lg font-light text-obsidian leading-relaxed italic flex-1">
                {t.text}
              </p>
              <div className="mt-6 pt-6 border-t border-hairline">
                <p className="font-manrope text-xs uppercase tracking-[0.12em] text-taupe">{t.name}</p>
                <p className="font-manrope text-[10px] text-taupe/60 mt-0.5">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
