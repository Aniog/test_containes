import SectionHeading from '@/components/home/SectionHeading'
import RatingStars from '@/components/products/RatingStars'

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="bg-stone-950 py-20 text-stone-50 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the glow, kept for the ease"
          description="A few notes from customers who wear Velmora on repeat."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)]"
            >
              <RatingStars rating={5} reviews={5} inverted />
              <p className="mt-6 font-[Cormorant_Garamond] text-3xl leading-9 text-stone-50">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-400">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
