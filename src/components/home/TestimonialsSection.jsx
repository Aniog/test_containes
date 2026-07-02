import { testimonials } from '@/data/catalog'
import SectionHeading from '@/components/ui/SectionHeading'
import StarRating from '@/components/ui/StarRating'

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-stone-900 py-16 text-stone-50 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved for the glow, the feel, and the gift-worthy finish"
          description="A few of the words we hear most often from women adding Velmora to their daily rotation."
          theme="dark"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <StarRating rating={5} reviewCount={5} light />
              <p className="mt-6 font-serif text-3xl leading-10 text-stone-50">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-300">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
