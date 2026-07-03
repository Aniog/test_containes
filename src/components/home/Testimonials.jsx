import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <h2 className="section-title text-center mb-10">Loved by You</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-sm text-velvet-600 leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm text-velvet-900 tracking-wide">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}