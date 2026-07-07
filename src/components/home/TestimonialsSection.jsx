import { testimonials } from "@/data/products"
import StarRating from "@/components/StarRating"

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl font-light uppercase tracking-widest text-ink sm:text-4xl">
          Loved By You
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-gold-muted bg-parchment/50 p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                "{testimonial.text}"
              </p>
              <p className="mt-5 text-xs font-sans font-semibold uppercase tracking-widest text-stone">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
