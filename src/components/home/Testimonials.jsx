import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-textPrimary tracking-[0.05em]">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(item => (
            <div key={item.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-sans text-sm md:text-base text-velmora-textSecondary leading-relaxed italic">
                "{item.text}"
              </p>
              {/* Name */}
              <p className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-textPrimary mt-4">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
