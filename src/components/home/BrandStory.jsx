import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-velmora-cream">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-sand md:aspect-auto md:min-h-[600px]">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] [brand-story-text] gold jewelry making editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">
          <p className="font-sans text-xs uppercase tracking-widest text-velmora-gold">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="mt-4 font-serif text-4xl leading-[1.1] text-velmora-espresso md:text-5xl"
          >
            Designed for Modern Heirlooms
          </h2>
          <p
            id="brand-story-text"
            className="mt-6 font-sans text-base leading-relaxed text-velmora-mocha"
          >
            Velmora was born from a simple belief: luxury should feel personal,
            not precious. We design demi-fine jewelry in small, thoughtful
            collections using 18k gold plating and hypoallergenic materials — so
            every piece can be worn, loved, and passed on.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-label text-velmora-espresso hover:text-velmora-gold"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
