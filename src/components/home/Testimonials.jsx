import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            Loved by You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Words from Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream border border-sand p-8 md:p-10 flex flex-col items-center text-center"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
