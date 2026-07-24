import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { useFadeIn } from '@/lib/useFadeIn'

const Testimonials = () => {
  const { ref: fadeRef, visible } = useFadeIn(0.1)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-velmora-cream border-t border-velmora-hairline">
      <div ref={fadeRef} className={`max-w-7xl mx-auto px-4 md:px-6 lg:px-8 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-velmora-dark">What Our Customers Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center p-6 md:p-8">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-sans text-sm md:text-base text-velmora-dark leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-textSecondary mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
