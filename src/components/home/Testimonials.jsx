import { testimonials } from "@/data/products"
import { StarRating } from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            Loved By Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-cream p-8 md:p-10 text-center flex flex-col items-center"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink leading-relaxed italic">
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
