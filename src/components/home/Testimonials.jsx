import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide-15 uppercase text-warm-black">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="text-center md:text-left">
              {/* Stars */}
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-sans text-base text-warm-black leading-relaxed">
                "{t.text}"
              </p>
              <p className="font-serif text-sm tracking-wide-15 uppercase text-stone-500 mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
