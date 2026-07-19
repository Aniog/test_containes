import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"
import SectionHeading from "@/components/home/SectionHeading"

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="Kind Words"
        title="Loved by Thousands"
        subtitle="Over 12,000 five-star reviews from the Velmora community."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col border border-sand bg-ivory p-8 text-center"
          >
            <StarRating rating={t.rating} size={16} className="justify-center" />
            <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-ink">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-xs uppercase tracking-widest2 text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
