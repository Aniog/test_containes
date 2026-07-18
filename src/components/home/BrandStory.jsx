import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora-2b4c6d"
            data-strk-bg="[story-text] [story-eyebrow] gold jewelry craftsmanship artisan hands warm studio"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        {/* Text */}
        <div className="lg:pl-6">
          <p
            id="story-eyebrow"
            className="text-[11px] uppercase tracking-widest2 text-champagne-deep"
          >
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-ink">
            Quiet luxury,
            <br />
            <span className="italic">made to last.</span>
          </h2>
          <p
            id="story-text"
            className="mt-6 text-sm md:text-base leading-relaxed text-stone"
          >
            Velmora began with a simple belief: that beautiful, lasting jewelry
            shouldn't require a luxury markup. We work directly with our
            atelier, finishing each piece in 18K gold plate over a
            hypoallergenic base — so every earring, necklace and huggie feels
            considered, wearable and genuinely yours.
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-stone">
            No middlemen, no inflated prices. Just demi-fine gold, designed in
            studio and delivered to your door.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border border-ink px-10 py-4 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
