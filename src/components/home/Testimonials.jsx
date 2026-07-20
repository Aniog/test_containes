import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">Kind Words</span>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-900 mt-3">Loved by Our Community</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-dark-50 p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs tracking-widest uppercase text-dark-900 font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}