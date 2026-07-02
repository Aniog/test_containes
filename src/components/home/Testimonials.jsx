import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-velmora-gold font-sans text-xs tracking-widest uppercase mb-4">Loved by You</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">What Our Customers Say</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-warm/80 italic leading-relaxed mb-5 text-sm md:text-base">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm tracking-wide">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}