import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-normal">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 md:p-10 border border-hairline">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-sans text-sm text-charcoal leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <p className="font-sans text-xs text-stone mt-6 uppercase tracking-wider">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
