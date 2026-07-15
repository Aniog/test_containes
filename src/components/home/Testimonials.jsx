import { Star } from "lucide-react"
import { testimonials } from "@/data/products"

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-cream p-8 md:p-10 flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-champagne text-champagne"
                  />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed mb-6">
                “{t.text}”
              </blockquote>
              <figcaption className="text-xs uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
