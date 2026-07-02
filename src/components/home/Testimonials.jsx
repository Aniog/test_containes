import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-widest-plus uppercase text-gold-600 mb-4 font-medium">
          Love Letters
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-deep font-medium">
          From Our Customers
        </h2>
        <div className="mt-6 w-16 h-[1px] bg-velvet-300 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-velvet-600 leading-relaxed italic mb-6 max-w-sm mx-auto text-sm">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-serif text-base text-deep">{t.name}</p>
            <p className="text-[11px] text-velvet-400 mt-1">Verified Buyer</p>
          </div>
        ))}
      </div>
    </section>
  )
}