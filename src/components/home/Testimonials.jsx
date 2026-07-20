import { testimonials } from '@/data/products'
import Stars from '@/components/ui/Stars'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-stone mb-3">Loved By Thousands</p>
          <h2 className="font-serif text-4xl md:text-5xl">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="text-center px-4 md:px-6 py-8 border border-line bg-cream"
            >
              <Stars rating={t.rating} size={16} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl italic leading-snug text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
