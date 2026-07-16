import { testimonials } from '@/data/products'
import Stars from '@/components/common/Stars'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="bg-velmora-pearl py-18 text-velmora-ink lg:py-24">
      <div className="velmora-container">
        <SectionHeading eyebrow="Loved by customers" title="Small Pieces, Lasting Impressions" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="bg-velmora-ivory p-7 shadow-soft">
              <Stars compact />
              <p className="mt-5 font-serif text-2xl leading-8 text-velmora-ink">“{item.quote}”</p>
              <footer className="mt-6 text-xs font-semibold uppercase tracking-nav text-velmora-clay">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
