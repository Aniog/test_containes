import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-product uppercase">What They Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl italic leading-relaxed text-base mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-nav font-sans text-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
