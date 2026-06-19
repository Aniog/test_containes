import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-2">Loved By</p>
        <h2 className="font-serif text-2xl md:text-3xl text-velvet-950 tracking-wide">Our Customers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white p-8 rounded-sm border border-velvet-100 hover:border-velvet-200 transition-colors"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <blockquote className="text-sm text-velvet-700 leading-relaxed mb-6 italic">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <p className="text-xs font-semibold text-velvet-900 tracking-wider">
              {t.name} {t.initial}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
