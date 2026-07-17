import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col items-center text-center px-4">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: '#B8924A', color: '#B8924A' }} />
                ))}
              </div>

              {/* Quote mark */}
              <span className="font-serif text-5xl text-gold/30 leading-none mb-2 -mt-2">"</span>

              <p className="font-serif text-lg font-light text-bark leading-relaxed italic mb-6">
                {t.text}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-4" />

              <p className="font-sans text-xs tracking-widest uppercase text-mist">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
