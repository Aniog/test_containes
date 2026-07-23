import { Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import StarRating from "@/components/ui/StarRating"

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-12 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            Loved By Thousands
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            What They're Saying
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col items-center border border-hairline bg-sand/40 px-8 py-10 text-center"
            >
              <Quote size={28} className="text-gold" strokeWidth={1} />
              <StarRating rating={t.rating} size={15} className="mt-4" />
              <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-ink">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 font-sans text-xs uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
