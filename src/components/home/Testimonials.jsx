import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-black">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream border border-velmora-border rounded-sm p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-charcoal text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-base text-velmora-black font-medium">{t.name}</p>
                <p className="text-[11px] text-velmora-muted mt-1 tracking-wider">
                  on {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
