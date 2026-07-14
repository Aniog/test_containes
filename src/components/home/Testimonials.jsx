import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest-3xl uppercase text-velmora-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 border border-velmora-ivory text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-ivory'}
                  />
                ))}
              </div>

              <p className="font-sans text-sm text-velmora-charcoal leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              <div>
                <p className="font-sans text-sm font-semibold text-velmora-black">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-velmora-silver mt-0.5">
                  {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
