import RatingStars from '@/components/products/RatingStars.jsx'
import { testimonials } from '@/data/store.js'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function TestimonialsSection() {
  return (
    <section className="bg-stone-950 py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Loved by our clients"
          title="A refined favorite for gifting and self-collecting."
          description="Short notes from women who wear Velmora on repeat, from weekday styling to special occasions."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="surface-card p-8 text-stone-100">
              <RatingStars rating={5} />
              <p className="mt-6 font-display text-3xl leading-tight text-stone-100">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-stone-300">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
