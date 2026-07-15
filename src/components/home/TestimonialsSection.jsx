import SectionHeading from '@/components/ui/SectionHeading.jsx'
import RatingStars from '@/components/ui/RatingStars.jsx'

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="bg-velmora-ivory px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Loved by our customers"
          title="Quiet praise from everyday wearers"
          description="A few of the notes that keep our bestselling pieces moving from wish list to daily uniform."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              className="rounded-[2rem] border border-velmora-mist bg-velmora-porcelain p-8 shadow-velmora"
              key={testimonial.author}
            >
              <RatingStars light={false} rating={5} reviewCount={120 + index * 9} />
              <p className="mt-6 font-serif text-3xl leading-tight text-velmora-ink">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-eyebrow text-velmora-gold">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
