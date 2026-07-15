import { Star } from "lucide-react"
import { EDITORIAL } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="border-y border-hairline bg-surface py-20 md:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Worn & Loved</p>
          <h2
            className="display-lg mt-3 text-ink text-balance"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            From the people who wear it.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {EDITORIAL.testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 font-serif text-2xl italic leading-snug text-ink md:text-[26px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-inkSoft">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < count
              ? "h-4 w-4 fill-gold text-gold"
              : "h-4 w-4 text-hairline"
          }
          strokeWidth={1}
        />
      ))}
    </div>
  )
}
