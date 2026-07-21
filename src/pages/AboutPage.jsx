import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"


const values = [
  {
    title: "Hand-Finished",
    text: "Every piece is finished by hand in small batches, so no two are exactly alike.",
  },
  {
    title: "Honest Pricing",
    text: "Direct-to-you means no retail markups. Considered design at an honest price.",
  },
  {
    title: "Made to Last",
    text: "18K gold plating and vermeil over brass and sterling silver, made to be worn daily.",
  },
  {
    title: "Kind to Skin",
    text: "Hypoallergenic, nickel and lead free — safe for the most sensitive ears.",
  },
]

export default function AboutPage() {
  const containerRef = useRef(null)
  const { ref, visible } = useReveal()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-espresso">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-4e1b"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center sm:px-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-cream/80">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl text-cream md:text-6xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-cream/80"
          >
            Demi-fine gold jewelry, designed in studio and made to be lived in.
          </p>
        </div>
      </section>

      {/* Story split */}
      <section ref={ref} className={`reveal ${visible ? "is-visible" : ""} py-20 md:py-28`}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand/40">
            <img
              alt="Velmora studio"
              data-strk-img-id="about-story-img-1a2b"
              data-strk-img="[about-story-text] gold jewelry making atelier warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="md:pl-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              The Velmora Philosophy
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Fine jewelry, freed from the vault.
            </h2>
            <div
              id="about-story-text"
              className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-stone"
            >
              <p>
                Velmora was founded on a simple conviction: that beautiful
                jewelry should be worn, not locked away for special occasions.
                We design demi-fine pieces in warm 18K gold plating and vermeil —
                made to move with you from morning coffee to evening out.
              </p>
              <p>
                By working direct-to-consumer, we cut the retail markup and pass
                the value to you. The result is quietly luxurious jewelry at an
                honest, accessible price — the kind you reach for every day.
              </p>
            </div>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              What We Stand For
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              The Velmora Promise
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-serif text-xl uppercase tracking-[0.12em] text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-stone">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
