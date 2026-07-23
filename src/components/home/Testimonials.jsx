import { testimonials } from "@/data/products"
import { StarRating } from "@/components/layout/StarRating"

export function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            Reviews
          </p>
          <h2 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-charcoal md:text-4xl">
            Loved by You
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-velmora-border bg-velmora-cream p-8 text-center transition-shadow hover:shadow-sm"
            >
              <StarRating rating={5} size={14} />
              <p className="mt-6 font-sans text-base italic leading-relaxed text-velmora-charcoal">
                "{testimonial.text}"
              </p>
              <p className="mt-6 font-serif text-xs uppercase tracking-[0.2em] text-velmora-warm-gray">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
