import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.15em] uppercase text-brand-400 font-sans mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 md:p-8 rounded-sm border border-brand-100 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-sm text-brand-700 leading-relaxed font-sans italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs text-brand-400 font-sans tracking-wider uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}