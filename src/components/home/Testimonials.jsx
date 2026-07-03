import { Quote } from 'lucide-react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">Kind Words</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Loved by Thousands</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col border border-sand bg-cream-deep/40 p-8 text-center"
            >
              <Quote size={22} className="mx-auto text-gold" />
              <StarRating value={t.rating} size={14} className="mt-4 justify-center" />
              <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-wide2 text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
