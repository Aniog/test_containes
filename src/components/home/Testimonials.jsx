import Stars from '@/components/ui/Stars'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Loved by Many
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">What They Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="text-center px-6 py-8 border border-ink/10 bg-cream"
            >
              <Stars rating={t.rating} size={16} className="justify-center mb-5" />
              <p className="font-serif text-xl italic leading-relaxed text-ink">
                “{t.text}”
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
