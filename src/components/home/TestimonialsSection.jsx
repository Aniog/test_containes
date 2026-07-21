import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'

export default function TestimonialsSection() {
  return (
    <section className="bg-espresso py-16 text-cream md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-serif text-3xl font-medium md:text-4xl">Loved by You</h2>
          <p className="mt-3 font-sans text-sm text-cream/70">
            Real reviews from real customers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-cream/10 p-8 transition-colors duration-300 hover:border-cream/20"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-5 font-serif text-xl italic leading-relaxed text-cream/95">
                “{testimonial.text}”
              </p>
              <p className="mt-6 font-sans text-xs font-medium uppercase tracking-wide text-cream/60">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
