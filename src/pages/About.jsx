import { Link } from "react-router-dom"
import Newsletter from "@/components/home/Newsletter"

export default function About() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden bg-ink">
        <div
          data-strk-bg-id="about-hero-velmora-4e"
          data-strk-bg="[about-hero-sub] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-5 text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-champagne">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-5xl font-light text-ivory sm:text-6xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-sub"
            className="mt-5 max-w-lg text-sm leading-relaxed text-ivory/80"
          >
            Fine jewelry, made for the everyday. Velmora is a demi-fine studio
            built on warmth, craft, and quiet luxury.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="mb-4 text-center text-[11px] uppercase tracking-[0.28em] text-gold">
          Est. with intention
        </p>
        <h2 className="mb-8 text-center font-serif text-4xl font-light text-ink sm:text-5xl">
          Jewelry made to live in
        </h2>
        <div className="space-y-5 text-sm leading-relaxed text-ink-soft sm:text-base">
          <p>
            Velmora began with a simple belief: fine jewelry shouldn't be saved for
            special occasions. Too often, beautiful pieces sit in boxes — too
            precious, too expensive, too fragile for real life. We set out to
            change that.
          </p>
          <p>
            We craft demi-fine pieces in 18K gold plating over sterling silver —
            weighty enough to feel real, gentle enough to wear every day, and
            priced to be treasured, not hoarded. Every piece is hypoallergenic,
            ethically made, and finished by hand in small batches.
          </p>
          <p>
            What you wear should be as considered as how it was made. That's the
            Velmora promise — quiet luxury, warm gold, and pieces designed to be
            lived in.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-deep hover:text-ivory"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-3">
          {[
            {
              title: "Ethically Made",
              body: "Small-batch production with responsible sourcing and fair-labor partners.",
            },
            {
              title: "Hypoallergenic",
              body: "Nickel and lead free, gentle on the most sensitive skin.",
            },
            {
              title: "Made to Last",
              body: "18K gold plating over sterling silver, finished to wear every day.",
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
