import { testimonials } from '@/data/products'
import StarRating from '@/components/StarRating'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Loved by Many</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="text-center px-4 md:px-6 py-8 border-t border-hairline"
            >
              <Quote className="w-6 h-6 text-gold mx-auto mb-5" strokeWidth={1} />
              <StarRating rating={t.rating} size={14} className="justify-center mb-4" />
              <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-widest2 text-sand">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
