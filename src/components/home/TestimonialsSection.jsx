import SectionHeading from '@/components/common/SectionHeading'
import Stars from '@/components/common/Stars'
import { testimonials } from '@/data/products'

const TestimonialsSection = () => {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Loved by our customers"
        title="Refined enough to gift, effortless enough to keep"
        description="A few notes from women who wear Velmora on repeat."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.author}
            className="flex h-full flex-col justify-between rounded-[2rem] border border-velmora-mist/20 bg-white/75 p-6 shadow-soft"
          >
            <div className="space-y-5">
              <Stars rating={5} reviewCount={0} />
              <p className="text-base leading-8 text-velmora-rose">
                “{testimonial.quote}”
              </p>
            </div>
            <p className="pt-6 text-xs uppercase tracking-[0.28em] text-velmora-mist">
              {testimonial.author}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
