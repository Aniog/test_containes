import { Star } from 'lucide-react'
import { testimonials } from '../../data/products'

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl font-light text-ink leading-relaxed flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Author */}
              <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-muted">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
