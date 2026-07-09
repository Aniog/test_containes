import React from "react"
import { Link } from "react-router-dom"
import { getImgUrl } from "@/lib/imgConfig"

export default function About() {
  const aboutBg = getImgUrl("about-hero-3d7b2e")

  return (
    <div className="bg-cream pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={aboutBg ? { backgroundImage: `url(${aboutBg})` } : undefined}
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-cream/80 text-xs uppercase tracking-widest2 mb-4">Est. 2021</p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-7xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-sub"
            className="text-cream/80 text-sm mt-6 max-w-md leading-relaxed"
          >
            Fine jewelry, made for the everyday.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4">The Velmora Philosophy</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Jewelry should be lived in, not locked away
          </h2>
          <p className="text-stone text-base mt-8 leading-relaxed">
            Velmora was founded on a simple frustration: beautiful gold jewelry
            was either prohibitively expensive or cheaply made. We set out to
            close that gap — demi-fine pieces in 18K gold plating, hand-finished
            and hypoallergenic, at a price that doesn't require a special
            occasion.
          </p>
          <p className="text-stone text-base mt-6 leading-relaxed">
            Every piece begins as a sketch in our studio and ends in your hands,
            considered at every step. We believe in quiet luxury — in pieces that
            feel personal, wear beautifully, and last for years.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-editorial mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Hand-Finished",
              text: "Each piece is hand-polished and finished by skilled artisans, so no two are exactly alike.",
            },
            {
              title: "Hypoallergenic",
              text: "Nickel-free and gentle on sensitive skin. Made to be worn every day, without irritation.",
            },
            {
              title: "Made to Last",
              text: "18K gold plating over a durable brass base, designed to keep its warmth and shine.",
            },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-2xl text-ink uppercase tracking-widest3">
                {v.title}
              </h3>
              <p className="text-stone text-sm mt-4 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Find your everyday piece
          </h2>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-cream text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-gold-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
