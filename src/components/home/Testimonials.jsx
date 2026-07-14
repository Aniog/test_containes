import { Star } from "lucide-react"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-champagne-deep">
            Loved by Thousands
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
            What They're Saying
          </h2>
          <div className="mt-5 h-px w-12 bg-champagne" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col bg-cream p-8 shadow-[0_8px_30px_rgba(26,23,20,0.05)]"
            >
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i <= t.rating
                        ? "fill-champagne text-champagne"
                        : "text-ink/20"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-espresso">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-taupe">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
