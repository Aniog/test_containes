import React from 'react'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream border border-velmora-border/50 p-6 md:p-8 rounded-sm"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-sm text-velmora-graphite leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-velmora-border/40">
                <p className="text-sm font-medium text-velmora-charcoal">{t.name}</p>
                <p className="text-xs text-velmora-stone mt-0.5">Purchased: {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
