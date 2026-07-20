import StarRating from '@/components/ui/StarRating'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-sand p-8 md:p-10 flex flex-col items-center text-center"
            >
              <StarRating rating={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-charcoal italic leading-relaxed">
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
