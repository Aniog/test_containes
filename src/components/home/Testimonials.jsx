import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-velvet-500 mb-3 font-sans">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-velvet-300 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="text-center p-6 md:p-8 border border-velvet-200/80"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <p className="text-ink/70 text-sm md:text-base leading-relaxed italic font-serif mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-sm font-medium text-ink uppercase tracking-[0.1em] text-[11px]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}