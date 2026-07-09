import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-padding bg-velvet-950">
      <div className="container-site">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super-wide uppercase text-gold-400 mb-4 font-medium">Reviews</p>
          <h2 className="heading-lg text-velvet-50">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <blockquote className="text-velvet-300 text-sm leading-relaxed font-light italic mb-5">
                "{t.text}"
              </blockquote>
              <p className="text-xs tracking-wider uppercase text-velvet-50 font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}