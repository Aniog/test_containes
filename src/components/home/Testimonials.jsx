import StarRating from "@/components/ui/StarRating"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-14 reveal">
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Kind Words</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink-800">Loved by Many</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="reveal text-center px-4"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <StarRating rating={t.rating} size={16} className="justify-center mb-5" />
            <blockquote className="font-serif text-xl md:text-2xl text-ink-700 italic leading-relaxed">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-widest2 text-ink-500">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
