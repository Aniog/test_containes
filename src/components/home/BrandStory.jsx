import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-espresso py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Image left */}
        <div className="relative aspect-[4/5] overflow-hidden bg-espresso/40">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-bg-velmora-2b8e1d"
            data-strk-bg="[brand-story-text] [brand-story-title] gold jewelry craftsmanship atelier hands"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        {/* Text right */}
        <div className="md:pl-4">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-soft">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl"
          >
            Jewelry made to live
            <br />
            <span className="italic text-gold-soft">in your everyday</span>
          </h2>
          <p
            id="brand-story-text"
            className="mt-6 font-sans text-sm leading-relaxed text-cream/75"
          >
            Velmora began with a simple belief: fine-quality gold jewelry
            shouldn't be reserved for special occasions. We plate in genuine 18K
            gold over sterling silver, design every piece in-house, and price it
            honestly — so you can build a collection you reach for every morning,
            not once a year.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-cream/75">
            Hypoallergenic, nickel-free, and made to be treasured for years.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border border-gold-soft px-9 py-3.5 font-sans text-xs uppercase tracking-widest2 text-gold-soft transition-all duration-300 hover:bg-gold-soft hover:text-espresso"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
