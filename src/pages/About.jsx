import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { resolveImgUrl } from "@/lib/utils"

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
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${resolveImgUrl("about-hero-bg-2d5f") || ""})` }}
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] uppercase tracking-widest2 text-cream/80 mb-4">Est. 2019</p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-tight"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-5 text-cream/85 max-w-xl leading-relaxed"
          >
            Quiet luxury, considered down to the last detail.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">The Velmora Promise</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Fine craftsmanship, made for every day
          </h2>
          <p className="mt-6 text-espresso-700 leading-relaxed">
            Velmora began with a simple belief: that fine craftsmanship shouldn't
            be reserved for special occasions. We design demi-fine gold jewelry
            in our studio — pieces with the warmth and weight of heirlooms, made
            to be worn every single day.
          </p>
          <p className="mt-4 text-espresso-700 leading-relaxed">
            Every piece is 18K gold plated over sterling silver, hypoallergenic,
            and finished by hand. By selling directly to you, we remove the
            markups and pass on the value — considered design, honestly priced.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "18K Gold Plated", d: "Layered over sterling silver for warmth and durability." },
            { t: "Hypoallergenic", d: "Nickel-free and lead-free — kind to sensitive skin." },
            { t: "Made by Hand", d: "Each piece is finished by hand in our studio." },
          ].map((v) => (
            <div key={v.t} className="text-center border border-line p-10 bg-cream-100">
              <h3 className="font-serif text-2xl text-espresso">{v.t}</h3>
              <p className="mt-3 text-sm text-espresso-700 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <Link
          to="/shop"
          className="inline-block bg-gold text-espresso text-[11px] uppercase tracking-widest2 px-9 py-4 hover:bg-gold-600 transition-colors"
        >
          Explore the Collection
        </Link>
      </section>
    </div>
  )
}
