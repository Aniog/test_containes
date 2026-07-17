import SectionHeading from '@/components/shared/SectionHeading'

function TestimonialsSection({ testimonials }) {
  return (
    <section className="bg-velvet py-16 text-ivory md:py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Loved by customers"
          title="A few notes from our community"
          description="Thoughtful gifting, easy layering, and premium finishing details are the reasons these pieces keep earning repeat wear."
          light
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-luxe border border-pearl/20 bg-ivory/5 p-6 shadow-soft backdrop-blur-sm">
              <div className="flex gap-1 text-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-pearl">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-luxe text-ivory">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
