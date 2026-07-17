import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading">Real Reviews</p>
          <h2 className="section-heading mt-3">Loved by Thousands</h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-white border border-ink-100/50 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <p className="text-ink-700 text-sm leading-relaxed font-light flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-ink-100">
                <p className="text-xs uppercase tracking-widest text-ink-500 font-medium">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}