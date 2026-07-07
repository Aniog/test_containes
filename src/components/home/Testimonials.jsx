import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] uppercase text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
                ))}
              </div>
              <p className="text-stone-600 leading-relaxed italic font-serif text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-[0.15em] uppercase font-medium text-charcoal">
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
