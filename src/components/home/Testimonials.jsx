import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="font-serif text-section text-center text-velmora-text mb-12 md:mb-16">
          Loved by You
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-sm text-velmora-text leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
