import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Words from Our Wearers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="text-center px-4 md:px-6 py-8 border border-sand bg-ivory"
            >
              <StarRating rating={t.rating} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
