import StarRating from '../ui/StarRating'
import { testimonials } from '../../lib/data'

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl text-velmora-espresso md:mb-14 md:text-4xl">
          Loved by Our Customers
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-velmora-border bg-white p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-velmora-espresso">
                “{testimonial.text}”
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-taupe">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
