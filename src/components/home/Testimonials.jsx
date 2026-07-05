import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Loved by You
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Words from Wearers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white border border-line p-8 md:p-10 text-center shadow-soft flex flex-col items-center"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl italic leading-relaxed text-ink">
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
