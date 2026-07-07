import { testimonials } from '@/data/products.js?velmora=20260707'
import SectionHeading from '@/components/common/SectionHeading'
import RatingStars from '@/components/common/RatingStars'

export default function TestimonialsSection() {
  return (
    <section className="container-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Loved by customers"
        title="Notes from the Velmora circle"
        description="Real feedback from women who wear, gift, and repeat-order our demi-fine essentials."
        align="center"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.id} className="rounded-[2rem] border border-velmora-espresso/10 bg-white/70 p-8 shadow-card">
            <RatingStars rating={item.rating} reviews={12} />
            <p className="mt-6 text-lg leading-8 text-velmora-noir">“{item.quote}”</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/65">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
