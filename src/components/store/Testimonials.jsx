import { testimonials } from '@/data/products.js'
import RatingStars from '@/components/store/RatingStars.jsx'
import SectionHeading from '@/components/store/SectionHeading.jsx'

const Testimonials = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="content-wrap">
        <SectionHeading
          kicker="Loved by customers"
          title="Small luxuries, lasting impressions"
          description="What customers are saying about the fit, finish, and gifting experience."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.id} className="surface-card h-full p-6">
              <div className="space-y-4">
                <RatingStars rating={5} reviews={testimonial.id.length + index * 7 + 84} />
                <p className="text-base leading-8 text-ink/80">“{testimonial.quote}”</p>
                <p className="text-sm uppercase tracking-[0.18em] text-velvet">{testimonial.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
