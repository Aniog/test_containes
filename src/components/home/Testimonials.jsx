import { testimonials } from "@/data/products"
import Stars from "@/components/ui/Stars"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="text-center px-4 md:px-6 py-8 border-t border-sand"
            >
              <Quote className="w-6 h-6 text-gold mx-auto mb-5" strokeWidth={1} />
              <Stars rating={t.rating} size={14} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-espresso italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.25em] text-taupe">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
