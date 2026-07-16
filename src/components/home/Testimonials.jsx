import { Quote } from 'lucide-react'
import { testimonials } from '@/data/products'
import Stars from '@/components/ui/Stars'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Loved By Many</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Kind Words</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="fade-up flex flex-col items-center border border-sand bg-cream px-7 py-9 text-center"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <Quote size={22} strokeWidth={1} className="text-gold" />
            <Stars rating={t.rating} size={14} className="mt-4" />
            <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-ink">
              "{t.text}"
            </blockquote>
            <figcaption className="mt-5 text-[11px] uppercase tracking-wide2 text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
