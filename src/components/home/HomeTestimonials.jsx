import SectionHeading from '@/components/common/SectionHeading'
import StarRating from '@/components/common/StarRating'

const HomeTestimonials = ({ testimonials }) => {
  return (
    <section className="bg-velmora-pearl py-16 md:py-24">
      <div className="page-shell space-y-10">
        <SectionHeading
          eyebrow="Loved by our customers"
          title="What women are saying"
          description="Short reviews from customers who wear Velmora every day, gift it often, and keep coming back for the next piece."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-mist p-7 shadow-soft"
            >
              <StarRating rating={5} reviewCount={5} />
              <p className="mt-6 text-base leading-8 text-velmora-ink/75">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-velmora-gold">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials
