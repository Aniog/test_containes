import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useImageLoader } from '@/lib/useImageLoader'

export default function About() {
  const containerRef = useImageLoader([])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-velmora-5e6f"
          data-strk-bg="[about-hero-text] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-sand"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-cream/80 text-[11px] tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-cream text-5xl md:text-7xl max-w-2xl leading-[1.05]">
            Crafted to be treasured.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p id="about-hero-text" className="sr-only">
            Velmora fine jewelry atelier craftsmanship
          </p>
          <p className="text-[11px] tracking-[0.3em] uppercase text-champagne mb-5 text-center">
            Est. with intention
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center leading-tight">
            We believe beautiful, lasting gold jewelry should not be reserved for special occasions.
          </h2>
          <div className="mt-10 space-y-6 text-stone leading-relaxed text-lg">
            <p>
              Velmora began in a small studio with a simple conviction: that the
              warmth of fine gold jewelry belongs in everyday life. We design
              every piece ourselves and finish each by hand in 18K gold plating
              over sterling silver — the look and feel of fine jewelry, without
              the markup of a storefront.
            </p>
            <p>
              Our materials are chosen to last: hypoallergenic, nickel-free, and
              made to be worn from morning to night. We sweat the details — the
              weight of a huggie, the catch of light on a crystal, the way a
              chain falls — so that each piece feels considered, not mass-produced.
            </p>
            <p>
              Above all, we make jewelry to be lived in. Pieces you reach for
              without thinking, that become part of your story. Crafted to be
              treasured — for gifting, and for you.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Honest Materials',
              body: '18K gold plating over 925 sterling silver. Nickel-free, lead-free, and hypoallergenic — kind to sensitive skin.',
            },
            {
              title: 'Considered Design',
              body: 'Every piece is designed in our studio and finished by hand. We obsess over weight, proportion, and the way light moves.',
            },
            {
              title: 'Fair Pricing',
              body: 'No storefront markups. We sell directly to you, so fine-quality gold jewelry stays accessible.',
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink mb-3">{v.title}</h3>
              <p className="text-stone leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Find your everyday gold.</h2>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-champagne text-cream text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-champagne-deep transition-colors duration-300"
          >
            Shop the Collection <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  )
}
