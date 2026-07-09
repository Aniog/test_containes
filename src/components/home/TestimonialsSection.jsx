import RatingStars from '@/components/shared/RatingStars.jsx'
import SectionIntro from '@/components/shared/SectionIntro.jsx'
import { testimonials } from '@/data/products.js'

const TestimonialsSection = () => {
  return (
    <section className="page-shell py-16 md:py-24">
      <SectionIntro
        eyebrow="Testimonials"
        title="Loved for the glow, kept for the ease"
        description="A few notes from women who reached for Velmora once and made it part of their everyday rotation."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.customer}
            className="rounded-[2rem] border border-truffle/10 bg-white p-8 shadow-card"
          >
            <RatingStars light={false} rating={5} reviewCount={5} />
            <p className="mt-6 text-lg leading-8 text-velvet">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-champagne">
              {testimonial.customer}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
