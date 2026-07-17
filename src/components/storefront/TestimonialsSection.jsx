import RatingStars from './RatingStars'
import { testimonials } from '../../data/storefrontContent'

function TestimonialsSection() {
  return (
    <section className="bg-champagne px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-luxe text-gold">Testimonials</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl text-umber sm:text-5xl">
          Loved for the finish, the feel, and the everyday wearability.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-hairline bg-ivory p-6 shadow-soft">
              <RatingStars rating={5} reviews={testimonial.name.length * 12} />
              <p className="mt-5 text-base leading-8 text-umber">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-luxe text-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
