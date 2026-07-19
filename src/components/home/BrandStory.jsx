import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-cream" ref={containerRef}>
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4.2]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-7c2e1a"
            data-strk-bg="[story-text] [story-eyebrow] gold jewelry craftsmanship atelier hands"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
        </div>
        <div className="px-6 py-16 md:px-16 md:py-24">
          <p id="story-eyebrow" className="text-xs uppercase tracking-widest3 text-gold">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Quiet luxury,
            <br />
            <span className="italic">made to last.</span>
          </h2>
          <p id="story-text" className="mt-6 text-base leading-relaxed text-ink-soft">
            Velmora was founded on a simple belief: that fine-feeling jewelry shouldn't
            demand a fine-jewelry price. Each piece is hand-finished in 18K gold plating
            over a durable brass base, designed to be worn daily and treasured for years.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            We work directly with our ateliers — no middlemen, no markups — so every piece
            arrives with the quality of luxury, at an honest price.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
