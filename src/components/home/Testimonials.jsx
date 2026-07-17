import { Quote } from 'lucide-react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Loved By Thousands</p>
        <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">What They Say</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col items-center border border-sand bg-cream px-8 py-10 text-center"
          >
            <Quote size={24} className="text-gold" />
            <StarRating rating={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-taupe">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
