import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} id="story" className="bg-velmora-parchment py-16 text-velmora-ink sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <div className="relative min-h-[440px] overflow-hidden bg-velmora-linen shadow-soft">
          <div
            className="absolute inset-0"
            data-strk-bg-id="brand-story-jewelry-atelier-c86f2d"
            data-strk-bg="[story-copy] [story-heading]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/30 to-transparent" />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Our Story</p>
          <h2 id="story-heading" className="mt-4 font-serif text-5xl font-medium leading-[1.02] text-velmora-ink sm:text-6xl">
            Jewelry for the rituals you keep close.
          </h2>
          <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-clay">
            Velmora was created for women who collect feeling, not excess. Each demi-fine piece is designed with warm gold finishes, skin-kind details, and silhouettes that move from morning coffee to candlelit celebrations.
          </p>
          <p className="mt-4 text-base leading-8 text-velmora-clay">
            Premium in finish, accessible in price, and intentionally edited so every piece earns its place.
          </p>
          <Link to="/shop" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:text-velmora-gold">
            Our Story
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
