import { TESTIMONIALS } from '@/data/products.js'
import SectionHeading from '@/components/storefront/SectionHeading.jsx'

const Testimonials = () => (
  <section id="testimonials" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
    <div className="mx-auto max-w-7xl space-y-10">
      <SectionHeading
        eyebrow="Loved by our community"
        title="What customers are saying"
        description="Short notes from women who wear Velmora for everyday polish, gifting, and occasions that deserve a little more glow."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <article key={item.id} className="rounded-[28px] border border-champagne/30 bg-white/80 p-6 text-espresso shadow-soft">
            <p className="text-gold">★★★★★</p>
            <p className="mt-5 text-sm leading-8 text-ink-soft">“{item.quote}”</p>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-espresso">{item.author}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
