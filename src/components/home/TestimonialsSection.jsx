import { testimonials } from '@/lib/products'
import SectionHeading from '@/components/shared/SectionHeading'
import Stars from '@/components/ui/Stars'

export default function TestimonialsSection() {
  return (
    <section className="bg-velmora-ink px-4 py-20 text-velmora-ivory sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the finish, remembered for the feeling"
          description="Velmora pieces are chosen for gifting, collecting, and wearing on repeat."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <Stars rating={5} className="text-velmora-ivory/75 [&>span]:text-velmora-ivory/75" />
              <p className="mt-6 text-lg leading-8 text-velmora-ivory/85">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-[0.26em] text-velmora-gold">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
