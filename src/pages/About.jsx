import React from "react"
import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function About() {
  const containerRef = useStrkImages([])
  useScrollReveal()

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-velmora-9d1f"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="container-editorial relative z-10 text-center">
          <p className="eyebrow text-ivory/80">Est. for the everyday</p>
          <h1
            id="about-hero-title"
            className="mt-4 font-serif text-5xl font-light text-ivory md:text-7xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mx-auto mt-5 max-w-xl font-serif text-lg italic text-ivory/85"
          >
            Fine jewelry should be lived in, not locked away.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="container-editorial py-20 md:py-28">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Velmora Philosophy</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
            Quiet luxury, made to last.
          </h2>
          <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-ink/80">
            <p>
              Velmora was founded on a simple belief: that fine jewelry should
              be lived in, not locked away. We work in demi-fine 18K gold
              plating over sterling silver — the warmth of solid gold, at a
              price that invites the everyday.
            </p>
            <p>
              Every piece is hypoallergenic, ethically made, and finished by
              hand. We design for the woman who values restraint over noise —
              considered objects that earn their place in her rotation, season
              after season.
            </p>
            <p>
              No discounts shouted. No trends chased. Just gold, crafted to be
              treasured.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-deep py-20 md:py-24">
        <div className="container-editorial grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              title: "Ethically Made",
              body: "Responsibly sourced materials, hand-finished in small batches by artisans we know by name.",
            },
            {
              title: "Hypoallergenic",
              body: "Nickel-free sterling silver cores, plated in 18K gold — gentle on the most sensitive skin.",
            },
            {
              title: "Made to Last",
              body: "Heavy plating, secure closures, and a 30-day return promise on every piece we make.",
            },
          ].map((v) => (
            <div key={v.title} className="reveal text-center">
              <h3 className="font-serif text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 font-serif text-base italic leading-relaxed text-stone">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial py-20 text-center md:py-24">
        <Link to="/shop" className="btn-accent">
          Explore the Collection
        </Link>
      </section>
    </div>
  )
}
