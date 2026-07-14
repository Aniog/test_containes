import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/strk-image'

export default function About() {
  const ref = useStrkImages([])

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-cream">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-4c2f8a"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
          <p className="text-cream/80 text-xs uppercase tracking-[0.3em] mb-3">Est. 2021</p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-4xl md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="text-cream/80 mt-4 max-w-lg"
          >
            Demi-fine jewelry, designed in-house and made to be worn every day.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Velmora Promise</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Beautiful jewelry shouldn’t demand a luxury markup
          </h2>
          <p className="text-muted mt-6 leading-relaxed">
            Velmora was founded on a simple belief: that beautiful, lasting jewelry
            shouldn’t demand a luxury markup. We design every piece in-house and
            partner directly with skilled artisans, cutting out the middlemen so we
            can offer genuine 18K gold plating at an honest price.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Each piece is hand-finished, hypoallergenic, and made to be worn — not
            saved for special occasions. From the first sketch to the final polish,
            we obsess over the details so you can treasure every piece for years.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ink px-10 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold-deep hover:text-cream transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { t: '18K Gold Plated', d: 'Genuine gold plating over brass, hand-finished to a warm glow.' },
            { t: 'Hypoallergenic', d: 'Nickel-free and lead-free, gentle on even sensitive skin.' },
            { t: 'Made to Last', d: 'Designed for everyday wear, with care instructions for a lifetime.' },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-serif text-2xl text-ink">{v.t}</h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
