import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import TrustBar from '@/components/home/TrustBar'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="bg-stone pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <div
          data-strk-bg-id="about-bg-5e2a8f"
          data-strk-bg="[about-heading] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-espresso"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-espresso/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Story</p>
          <h1
            id="about-heading"
            className="mt-4 font-serif text-5xl leading-tight text-ivory md:text-6xl"
          >
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <TrustBar />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Founded on a Belief
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-deep md:text-5xl">
            Fine jewelry, without the fine-jewelry markup.
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/40" />
          <p className="mt-8 text-base leading-relaxed text-stone-muted">
            Velmora was born from a frustration with the jewelry industry: beautiful
            pieces locked behind inflated prices, and affordable pieces that
            tarnished in a week. We set out to build something in between — demi-fine
            jewelry crafted from 18K gold plated sterling silver, designed in-house
            and made to be worn every day.
          </p>
          <p className="mt-5 text-base leading-relaxed text-stone-muted">
            By working directly with our atelier and selling straight to you, we
            keep our prices honest and our quality uncompromising. Every piece is
            hypoallergenic, nickel-free, and tarnish-resistant — because the jewelry
            you love should stay with you.
          </p>
        </div>
      </section>

      {/* Values split */}
      <section className="bg-espresso-soft py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 md:px-10">
          {[
            {
              title: 'Honest Materials',
              body: '18K gold plate over sterling silver. No nickel, no lead, no compromises on what touches your skin.',
            },
            {
              title: 'Made to Last',
              body: 'Tarnish-resistant finishes and secure clasps, engineered for daily wear — not just special occasions.',
            },
            {
              title: 'Direct to You',
              body: 'No middlemen, no retail markups. We pass the savings directly to you, so beauty stays accessible.',
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-gold-soft">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory-muted">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-4xl text-stone-deep md:text-5xl">
            Find your next treasure
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-gold px-10 py-4 text-xs uppercase tracking-[0.2em] text-espresso transition-all duration-300 hover:bg-gold-soft"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
