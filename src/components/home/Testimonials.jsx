import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide">What Our Customers Say</h2>
          <div className="mt-3 w-12 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-sans text-base md:text-lg text-stone-600 leading-relaxed italic">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="mt-4 font-serif text-sm tracking-[0.1em] uppercase text-velmora-dark">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
