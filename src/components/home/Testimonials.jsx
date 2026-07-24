import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600">
            Real Reviews
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mt-2 font-light">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory rounded-sm p-6 lg:p-8 border border-midnight-900/5"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-sm text-midnight-600 leading-relaxed font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-gold-700">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-midnight-800">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}