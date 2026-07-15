import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-[#B8860B] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 border border-[#E8E4DF] text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#1A1A1A] leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}>
                "{t.text}"
              </p>

              {/* Author */}
              <p className="mt-6 text-xs tracking-widest uppercase text-[#6B6560]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
