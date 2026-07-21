import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Loved By Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-sand p-8 md:p-10 flex flex-col items-center text-center"
            >
              <StarRating rating={t.rating} size={16} />
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed mt-5 mb-6 italic">
                “{t.text}”
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-[0.2em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
