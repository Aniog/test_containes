import SectionHeader from '@/components/shared/SectionHeader'
import StarRating from '@/components/shared/StarRating'

const Testimonials = ({ items }) => {
  return (
    <section className="section-shell pt-0">
      <SectionHeader
        eyebrow="Loved by our community"
        title="Quiet luxury that still feels personal"
        description="Short notes from customers who wear Velmora for everyday polish, meaningful gifting, and everything in between."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-[2rem] border border-velmora-line bg-velmora-mist p-6 shadow-velmora-soft"
          >
            <StarRating className="mb-5" rating={5} />
            <p className="text-base leading-8 text-velmora-ink">“{item.quote}”</p>
            <div className="mt-8 border-t border-velmora-line pt-4">
              <p className="text-xs uppercase tracking-luxury text-velmora-gold">{item.name}</p>
              <p className="mt-2 text-sm text-velmora-muted">Purchased {item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
