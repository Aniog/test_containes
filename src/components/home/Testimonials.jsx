import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">Customer Love</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-8 border border-divider">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-taupe text-sm leading-relaxed mb-6 italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>

              <p className="text-xs font-sans font-medium text-[#1A1A1A] uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}