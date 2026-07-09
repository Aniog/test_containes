import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-velmora-gold text-velmora-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote mark */}
              <span className="font-cormorant text-5xl text-velmora-gold/30 leading-none mb-2 -mt-2">
                "
              </span>

              <p className="font-cormorant text-lg font-light text-velmora-text leading-relaxed italic flex-1 mb-6">
                {t.text}
              </p>

              <div className="border-t border-velmora-border pt-5">
                <p className="font-manrope text-xs tracking-[0.1em] uppercase text-velmora-text font-500">
                  {t.name}
                </p>
                <p className="font-manrope text-[10px] text-velmora-subtle mt-0.5">
                  Verified Purchase · {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
