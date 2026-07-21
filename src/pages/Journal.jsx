import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../strk-img-config.json"
import { ArrowRight } from "lucide-react"

const entries = [
  {
    id: "journal-1",
    eyebrow: "Style",
    title: "How to layer necklaces without tangling",
    blurb: "A simple formula for three lengths, two textures, and one quiet focal point.",
    imgId: "journal-1-img-7a3c1b",
    imgQuery: "layered delicate gold necklaces editorial portrait warm light [journal-1-title]",
    titleId: "journal-1-title",
  },
  {
    id: "journal-2",
    eyebrow: "Care",
    title: "The five-minute ritual to keep your gold bright",
    blurb: "Three things you have at home and a soft cloth are all you need.",
    imgId: "journal-2-img-2d8e4f",
    imgQuery: "polishing gold jewelry with soft cloth editorial warm light [journal-2-title]",
    titleId: "journal-2-title",
  },
  {
    id: "journal-3",
    eyebrow: "Gifting",
    title: "Choosing a piece she'll actually wear",
    blurb: "Three questions to ask yourself before you commit — and why less is more.",
    imgId: "journal-3-img-9b1f6a",
    imgQuery: "gold jewelry in gift box editorial still life warm [journal-3-title]",
    titleId: "journal-3-title",
  },
]

export default function Journal() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-bone-50 pt-32 md:pt-40">
        <div className="mx-auto max-w-editorial px-6 pb-10 md:px-10 md:pb-14">
          <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">Journal</p>
          <h1 className="mt-4 font-serif text-5xl text-ink md:text-6xl">Notes on gold, ritual, and gifting.</h1>
        </div>
      </section>

      <section className="bg-bone-50 pb-24">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 px-6 md:grid-cols-3 md:gap-10 md:px-10">
          {entries.map((entry) => (
            <article key={entry.id} className="group">
              <div
                className="luxury-tone relative overflow-hidden"
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  alt={entry.title}
                  data-strk-img-id={entry.imgId}
                  data-strk-img={entry.imgQuery}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-champagne-700">{entry.eyebrow}</p>
                <h2 id={entry.titleId} className="mt-2 font-serif text-2xl text-ink md:text-[26px]">
                  {entry.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{entry.blurb}</p>
                <Link
                  to="/journal"
                  className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-ink hover:text-champagne-700"
                >
                  Read note
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
