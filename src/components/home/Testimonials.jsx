import Stars from '@/components/ui/Stars'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Loved by Thousands</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">What They Say</h2>
          <div className="mt-6 h-px w-16 bg-gold" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center border border-line bg-sand/50 px-8 py-10 text-center"
            >
              <Stars rating={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-charcoal">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
