import { testimonials } from '@/data/products'
import Stars from '@/components/ui/Stars'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center text-center px-6 py-8 border border-sand bg-cream/40"
            >
              <Stars rating={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
