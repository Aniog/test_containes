import StarRating from '@/components/ui/StarRating'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-espresso-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Loved by Thousands
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
            What They're Saying
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center border border-gold/15 bg-espresso p-8 text-center"
            >
              <StarRating rating={t.rating} size="md" />
              <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-ivory">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-soft">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
