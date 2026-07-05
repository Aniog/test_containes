import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import { cn } from '@/lib/utils'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans">Kind Words</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-50">What Our Customers Say</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-velvet-600/50 border border-velvet-400/20 rounded-sm p-8 hover:border-velvet-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-serif italic text-base text-velvet-50/80 leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <p className="text-xs text-velvet-200 uppercase tracking-wider font-sans">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}