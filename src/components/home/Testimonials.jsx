import { testimonials } from '@/data/products'
import Stars from '@/components/ui/Stars'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center border border-line bg-cream-deep px-8 py-10 text-center"
            >
              <Stars rating={t.rating} size={16} />
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                &ldquo;{t.text}&rdquo;
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
