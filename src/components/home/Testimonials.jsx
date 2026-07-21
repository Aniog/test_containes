import { Stars } from "@/components/ui/Stars"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="text-center px-4 md:px-8 py-8 border-t border-line"
            >
              <Stars rating={t.rating} size={16} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-espresso italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-wide2 text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
