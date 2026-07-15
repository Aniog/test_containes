import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"


export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <img
            alt="Velmora atelier"
            data-strk-img-id="story-img-2c8e1f"
            data-strk-img="[story-text] [story-eyebrow] gold jewelry atelier craftsmanship warm editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="px-6 py-16 md:px-16 md:py-24">
          <p
            id="story-eyebrow"
            className="font-sans text-xs uppercase tracking-widest2 text-gold"
          >
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Jewelry made to be lived in
          </h2>
          <p
            id="story-text"
            className="mt-6 font-sans text-sm leading-relaxed text-stone"
          >
            Velmora began with a simple belief: that fine craftsmanship shouldn't
            be reserved for special occasions. Each piece is finished in 18k gold
            over a durable base, hypoallergenic and made to be worn from morning
            to night — through work, weekends, and everything between.
          </p>
          <p className="mt-4 font-sans text-sm leading-relaxed text-stone">
            We design in small, considered collections. No noise, no trends for
            their own sake — just pieces with quiet presence, made to be
            treasured and passed on.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 font-sans text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
