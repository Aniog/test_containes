import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border-t border-sand pt-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={15} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-espresso leading-snug italic font-light">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
