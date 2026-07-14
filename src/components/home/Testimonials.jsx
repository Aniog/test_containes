import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import { StarRating } from "@/components/ui/StarRating"

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container-x py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="mb-10 text-center md:mb-16">
        <p className="eyebrow">Reviews</p>
        <h2
          id="testimonials-title"
          className="mt-3 font-serif text-4xl text-ink-500 sm:text-5xl"
        >
          What our community says
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-7">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col bg-ivory-50 p-8 shadow-soft md:p-10"
          >
            <Quote
              size={28}
              strokeWidth={1}
              className="text-gold-400"
              aria-hidden="true"
            />
            <blockquote className="mt-6 flex-1 font-serif text-[20px] leading-relaxed text-ink-500 md:text-[22px]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <StarRating value={t.rating} size={13} />
              <span className="text-[12px] font-semibold uppercase tracking-wider2 text-ink-500">
                {t.name}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
