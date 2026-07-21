import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="section-subtitle mb-3">Real Reviews</p>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 md:p-8 rounded-sm border border-dark-100/60">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'text-gold fill-gold' : 'text-dark-200'}
                  />
                ))}
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-medium text-dark-900 font-sans">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}