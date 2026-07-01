import React from "react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-espresso">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-4d9f"
          data-strk-bg="[about-hero-title] gold jewelry studio craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-ivory/80 text-[11px] uppercase tracking-[0.3em] mb-3">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-ivory text-5xl md:text-6xl leading-tight">
            Quiet luxury, made to last.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">Est. 2019</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Fine-feeling jewelry, without the fine-jewelry price.
          </h2>
          <p className="mt-6 text-espresso-soft leading-relaxed">
            Velmora was founded on a simple frustration: beautiful gold jewelry
            was either prohibitively expensive or obviously costume. We set out
            to build the middle ground — demi-fine pieces with real weight, warm
            18K gold plating, and hand-set crystals, made in small batches and
            sold directly to you.
          </p>
          <p className="mt-4 text-espresso-soft leading-relaxed">
            Every piece is hypoallergenic, nickel-free, and finished by hand in
            our studio. We believe jewelry should be lived in — worn to work, to
            dinner, to sleep — and treasured for years, not seasons.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory uppercase tracking-[0.18em] text-xs px-10 py-4 hover:bg-gold-deep transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-10 text-center">
          {[
            { t: "18K Gold Plated", d: "Solid brass core, layered in real 18K gold for warmth that lasts." },
            { t: "Hypoallergenic", d: "Nickel and lead free — safe for sensitive skin, every day." },
            { t: "Hand-Set Crystals", d: "Each crystal placed and finished by hand for maximum light." },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-2xl text-espresso uppercase tracking-[0.12em]">{f.t}</h3>
              <p className="mt-3 text-espresso-soft text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
