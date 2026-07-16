import { testimonials } from '@/data/products'
import { StarRating } from '@/components/StarRating'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Kind Words</p>
        <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">Loved by Thousands</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col items-center border border-sand bg-cream px-8 py-10 text-center"
          >
            <Quote className="h-7 w-7 text-gold/50" strokeWidth={1} />
            <StarRating value={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-cocoa">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-espresso">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
