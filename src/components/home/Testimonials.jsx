import { Stars } from "@/components/ui/Stars"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">Loved by Many</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream border border-sand/60 p-8 md:p-10 flex flex-col items-center text-center"
            >
              <Stars rating={t.rating} size="w-4 h-4" />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed font-light">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest3 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
