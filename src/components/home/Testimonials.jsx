import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#F0E9DF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#C69C6D] mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2A24]">
            Loved by Thousands
          </h2>
          <div className="w-16 h-[1px] bg-[#C69C6D] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#F8F4EE] p-6 md:p-8">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#C69C6D] fill-[#C69C6D]" />
                ))}
              </div>
              <p className="font-sans text-sm text-[#2D2A24] leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm font-semibold text-[#8C867C]">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}