import SectionHeading from '../ui/SectionHeading'

const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Loved by customers"
          title="What women are saying"
          description="A few short notes from the Velmora community."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-noir/10 bg-white p-7 shadow-soft"
            >
              <p className="text-gold">★★★★★</p>
              <p className="mt-5 font-display text-2xl leading-9 text-noir">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-brand text-taupe">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
