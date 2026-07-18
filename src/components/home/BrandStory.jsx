import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PLACEHOLDER } from "@/context/CartContext"
import { resolveImgUrl } from "@/lib/utils"

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
    <section ref={ref} className="py-20 md:py-28 bg-cream-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4x5] overflow-hidden bg-cream">
            <img
              alt="The Velmora studio"
              src={resolveImgUrl("story-img-8b1c") || PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-espresso leading-tight"
            >
              Jewelry made to be lived in
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-espresso-700 leading-relaxed"
            >
              Velmora began with a simple belief: that fine craftsmanship
              shouldn't be reserved for special occasions. We design demi-fine
              gold jewelry in our studio — pieces with the warmth and weight of
              heirlooms, made to be worn every single day.
            </p>
            <p className="mt-4 text-espresso-700 leading-relaxed">
              Every piece is 18K gold plated over sterling silver,
              hypoallergenic, and finished by hand. No middlemen, no markups —
              just considered design, delivered to you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-espresso text-espresso text-[11px] uppercase tracking-widest2 px-8 py-3.5 hover:bg-espresso hover:text-cream transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
