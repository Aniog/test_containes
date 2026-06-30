import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-center mb-2">Loved by You</h2>
      <p className="text-sm text-velmora-muted text-center mb-12">Hear from the Velmora community</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm text-velmora-muted leading-relaxed italic mb-4">"{t.text}"</p>
            <p className="text-xs tracking-widest uppercase font-medium">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
