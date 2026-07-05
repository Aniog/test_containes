import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          data-strk-img-id="about-hero-1a2b"
          data-strk-img="[about-hero-title] gold jewelry atelier craftsmanship warm"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src={PLACEHOLDER}
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
          <p className="text-xs uppercase tracking-widest2 text-cream/80 mb-3">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-cream text-5xl md:text-6xl font-light">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4">Est. for the everyday</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-8">
            Fine-feeling gold, without the fine-jewelry price.
          </h2>
          <div className="space-y-5 text-muted leading-relaxed text-left">
            <p>
              Velmora began with a simple belief: that the warmth and weight of real gold jewelry shouldn’t be
              reserved for rare occasions — or rare budgets. We set out to make demi-fine pieces that feel
              heirloom in the hand, yet are made to be worn every single day.
            </p>
            <p>
              Each piece is hand-finished in small batches, plated in 18K gold over a hypoallergenic base, and
              tested for the kind of longevity that lets you live in it. No green marks. No fading after a week.
              No noise.
            </p>
            <p>
              We design for the woman who values restraint over flash, warmth over shine, and meaning over trend.
              Quiet luxury, made to be lived in.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sand/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { t: '18K Gold Plated', d: 'Hand-finished over a hypoallergenic, nickel-free base.' },
            { t: 'Small Batch', d: 'Made in limited runs, never mass-produced.' },
            { t: 'Lifetime Warranty', d: 'We stand behind our plating — for life.' },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-2xl text-ink mb-3">{f.t}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Find your everyday piece</h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-gold text-cream text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-soft transition-colors"
          >
            Shop the Collection <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
