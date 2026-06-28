import RatingStars from '@/components/ui/RatingStars'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Testimonials({ items }) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Customer notes"
          title="Loved for Everyday Luxury"
          description="Short reviews from women who wear Velmora for gifting, styling, and daily polish."
          centered
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-7 shadow-velmora-soft"
            >
              <RatingStars rating={5} className="justify-start" showValue={false} />
              <p className="mt-5 text-lg leading-8 text-velmora-ink">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-product text-velmora-taupe">
                {testimonial.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
