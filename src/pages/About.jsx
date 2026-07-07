import React from "react"
import { Link } from "react-router-dom"
import { resolveImg } from "@/lib/utils"
import { Gem, ShieldCheck, Leaf, Heart } from "lucide-react"

const VALUES = [
  { icon: Gem, title: "Demi-Fine Quality", text: "Solid brass cores with 18K gold plating — the warmth and weight of fine jewelry." },
  { icon: ShieldCheck, title: "Hypoallergenic", text: "Nickel-free and gentle on sensitive skin. Made to be worn every day." },
  { icon: Leaf, title: "Responsibly Made", text: "Recyclable packaging and small-batch production to reduce waste." },
  { icon: Heart, title: "Made to be Treasured", text: "Timeless designs that outlast trends and fast-fashion cycles." },
]

export default function About() {
  return (
    <div className="bg-cream pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          alt="Velmora atelier"
          src={resolveImg("about-hero")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/80">Our Story</p>
          <h1 className="mt-4 font-serif text-5xl text-cream md:text-6xl">
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Est. with intention</p>
          <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
            Fine jewelry, for every day.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-stone md:text-base">
            Velmora was founded on a simple frustration: beautiful jewelry was
            either prohibitively expensive or cheaply made. We set out to close
            that gap — demi-fine pieces with the look and feel of luxury, at a
            price that lets you wear them without a second thought.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-stone md:text-base">
            Every piece is designed in our studio and hand-finished by skilled
            artisans. We use solid brass cores with 18K gold plating, hand-set
            crystals, and hypoallergenic materials — because jewelry made to be
            treasured should also be made to be lived in.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand/50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                  <v.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center md:py-28">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            Find your everyday piece.
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-gold px-10 py-4 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-soft"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
