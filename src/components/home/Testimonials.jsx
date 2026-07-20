import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'
import AnimateIn from '../AnimateIn'

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#F5EDE3]">
      <div className="container-page">
        <AnimateIn className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">Kind Words</p>
          <h2 className="heading-lg">What Our Customers Say</h2>
          <div className="w-12 h-0.5 bg-gold/30 mx-auto mt-4" />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.id} delay={Math.min(i, 3)}>
              <div className="bg-white p-8 rounded-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted leading-relaxed text-sm mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-light flex items-center justify-center text-gold-dark font-medium text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-ink">{t.name}</span>
              </div>
            </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}