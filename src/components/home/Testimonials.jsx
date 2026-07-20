import { Star } from 'lucide-react'
import { testimonials } from '@/lib/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 md:p-8 bg-white border border-warm-border/40 rounded">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              {/* Text */}
              <p className="text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Name */}
              <p className="text-xs uppercase tracking-[0.15em] text-muted-text mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}