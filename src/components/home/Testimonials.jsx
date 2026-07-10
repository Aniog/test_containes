import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <h2 className="text-center font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-base font-light mb-10 md:mb-14">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4 py-6">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-base text-stone-600 font-sans leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase font-sans font-semibold text-base">
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
