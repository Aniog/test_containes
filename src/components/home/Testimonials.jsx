import { Star } from "lucide-react"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section
      className="container-x py-20 md:py-28"
      aria-labelledby="homepage-testimonials-title"
    >
      <div className="text-center mb-12 md:mb-16">
        <p className="label-2 text-mist mb-3">From the people who wear it</p>
        <h2
          id="homepage-testimonials-title"
          className="font-serif text-3xl md:text-5xl text-ink leading-tight"
        >
          Words from our community.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col"
          >
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-champagne fill-champagne"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-ink leading-snug mb-6 flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="label-2 text-mist">
              {t.name} · Verified Buyer
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
