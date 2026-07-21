import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../strk-img-config.json"
import { Sparkles, Truck, RefreshCw, ShieldCheck } from "lucide-react"

const promises = [
  { id: "p1", icon: Sparkles, title: "Real 18K gold plating", text: "Measured microns over brass or sterling silver — never a paint-thin flash plate." },
  { id: "p2", icon: ShieldCheck, title: "Hypoallergenic", text: "Nickel-free, lead-free, and tested for sensitive skin." },
  { id: "p3", icon: Truck, title: "Free worldwide shipping", text: "Complimentary on orders over $75, packed in our signature gift box." },
  { id: "p4", icon: RefreshCw, title: "30-day returns", text: "Worry-free on unworn pieces. We'll send you a prepaid label." },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-bone-50 pt-32 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 pb-12 md:px-10 md:pb-16">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">Our story</p>
          <h1 className="mt-4 max-w-[18ch] font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
            Jewelry, quietly made.
          </h1>
        </div>
      </section>

      <section className="bg-bone-50">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 px-6 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28">
          <div
            className="luxury-tone relative overflow-hidden"
            style={{ aspectRatio: "4 / 5" }}
          >
            <img
              alt="A founder at work in the Velmora studio"
              data-strk-img-id="about-hero-img-3a8c1d"
              data-strk-img="[about-pull-quote] [about-title] jeweler working at bench editorial portrait warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <h2
              id="about-title"
              className="font-serif text-3xl text-ink md:text-4xl"
            >
              How Velmora began.
            </h2>
            <p
              id="about-pull-quote"
              className="mt-5 font-serif text-2xl italic leading-relaxed text-ink/80"
            >
              "We wanted fine-feeling jewelry at a price you could gift without thinking twice."
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
              Velmora started in a small studio in Brooklyn with a single brass cuff and a stubborn idea: that the warmth of gold belongs in your everyday, not just in a safe.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
              Today we work with a small atelier of jewelers in New York and Bangkok, hand-setting stones and polishing each piece to a quiet luster. Every design is made to wear — and re-wear — for years.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Our promises.</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.id} className="border-t border-ink/15 pt-6">
                  <Icon className="h-5 w-5 text-champagne-700" strokeWidth={1.5} />
                  <h3 className="mt-4 text-[11px] font-medium uppercase tracking-[0.24em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-bone md:py-24">
        <div className="mx-auto max-w-editorial px-6 text-center md:px-10">
          <h2 className="font-serif text-4xl text-bone md:text-5xl">Find your next heirloom.</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-bone/65">
            Browse the full collection — every piece arrives in our signature gift box.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center bg-bone px-8 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:bg-champagne"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
