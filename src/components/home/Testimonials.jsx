import StarRating from "@/components/ui/StarRating"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream-deep/50 border border-sand/60 p-8 md:p-10 flex flex-col items-center text-center"
            >
              <StarRating rating={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed font-light">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-muted">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
