import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-01"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry studio craftsmanship warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-12">
          <p className="text-[11px] uppercase tracking-widest3 text-gold-light mb-3">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-5xl md:text-7xl text-white leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p id="about-hero-sub" className="mt-4 text-ivory/80 max-w-lg">
            Demi-fine gold jewelry, designed in studio and made to be worn every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">Est. Velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Fine jewelry, freed from the vault
          </h2>
          <div className="mt-8 space-y-6 text-base text-ink-soft leading-relaxed">
            <p>
              Velmora began with a simple belief: that fine jewelry should not be
              saved for special occasions. We design demi-fine pieces in 18K gold
              plate — warm enough to feel heirloom, accessible enough to wear every
              day.
            </p>
            <p>
              Each piece is drawn in our studio and finished by hand. We work in
              small batches, with hypoallergenic, nickel-free materials, so what
              rests against your skin is as considered as how it looks.
            </p>
            <p>
              From the first sketch to the signature gift box, our intention is the
              same: jewelry made to be lived in, and treasured for years, not seasons.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-gold text-white text-[11px] uppercase tracking-widest2 font-medium px-9 py-4 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-8xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "18K Gold Plated",
              body: "A thick layer of 18K gold over sterling silver, for warmth that lasts.",
            },
            {
              title: "Hypoallergenic",
              body: "Nickel-free and gentle on skin, so you can wear it from morning to night.",
            },
            {
              title: "Made by Hand",
              body: "Small batches, finished by hand, with the detail heirloom pieces deserve.",
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink mb-3">{v.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
