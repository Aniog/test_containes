import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="fill-champagne text-champagne" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velvet">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-parchment px-8 py-10 flex flex-col"
            >
              <StarRow />
              <p className="font-serif text-lg font-light text-velvet leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-champagne" />
                <span className="font-sans text-xs tracking-wider text-stone uppercase">
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
