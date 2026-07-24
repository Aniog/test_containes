import { Star } from 'lucide-react'
import testimonials from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-light">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">Kind Words</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-taupe leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-charcoal font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}