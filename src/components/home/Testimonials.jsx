import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="section-pad py-20 md:py-28 max-w-[1440px] mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl text-velvet-800 text-center mb-14">
        Loved by You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warm-500 text-warm-500" />
              ))}
            </div>
            <p className="font-serif text-velvet-700 text-sm leading-relaxed italic mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="text-xs font-sans tracking-wider uppercase text-velvet-500">
              {t.name} {t.initial}.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
