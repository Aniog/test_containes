import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-800 font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-velvet-50 p-8 border border-velvet-200"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-ink-700 italic leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velvet-300 flex items-center justify-center">
                  <span className="font-serif text-sm text-ink-800 font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-sm font-medium text-ink-800">
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