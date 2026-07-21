import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function BrandStory() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-bone-50 py-20 md:py-28" ref={ref}>
      <div className="mx-auto grid max-w-editorial items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative order-2 md:order-1">
          <div
            className="luxury-tone relative overflow-hidden"
            style={{ aspectRatio: "4 / 5" }}
          >
            <img
              alt="A hand at work on a piece of Velmora jewelry"
              data-strk-img-id="brand-story-img-9a2b6c"
              data-strk-img="[brand-story-quote] [brand-story-title] jeweler crafting gold jewelry editorial portrait warm light"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-bone-50 px-5 py-4 shadow-soft md:block">
            <p className="font-serif text-2xl text-ink">Est. 2021</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-ink/60">New York · Paris</p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">Our story</p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl"
          >
            Quietly made, meant to be worn.
          </h2>
          <p
            id="brand-story-quote"
            className="mt-6 font-serif text-xl italic leading-relaxed text-ink/75"
          >
            "We started Velmora with a simple idea — fine-feeling jewelry, at a price you can gift without thinking twice."
          </p>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink/70">
            Every piece is plated in real 18K gold over brass or sterling silver, hand-set where it matters, and made hypoallergenic for sensitive skin. The result: jewelry that looks like an heirloom and feels like an old friend.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-ink hover:text-champagne-700"
          >
            Our story
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
