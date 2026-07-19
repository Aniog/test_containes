import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="bg-cream py-20 md:py-28"
      aria-labelledby="homepage-story-title"
    >
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative aspect-[4/5] bg-bone overflow-hidden order-2 md:order-1">
          <div
            data-strk-bg-id="brand-story-img"
            data-strk-bg="[homepage-story-text] [homepage-story-title] editorial portrait of founder at workbench warm light"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
            className="absolute inset-0"
          />
        </div>
        <div className="order-1 md:order-2 max-w-lg">
          <p className="label-2 text-mist mb-4">Our Story</p>
          <h2
            id="homepage-story-title"
            className="font-serif text-3xl md:text-5xl text-ink leading-[1.05] mb-6"
          >
            Jewelry that earns its place in your everyday.
          </h2>
          <p
            id="homepage-story-text"
            className="text-ink/80 text-base md:text-[17px] leading-relaxed mb-5"
          >
            Velmora began with a simple question: why does fine jewelry feel
            like it belongs in a box? We make demi-fine pieces — 18K gold plated
            over a solid brass core — designed to be worn on a Tuesday, not
            just a wedding.
          </p>
          <p className="text-ink/80 text-base md:text-[17px] leading-relaxed mb-8">
            Every collection is drawn, prototyped, and finished in our
            studio. We work in small batches, with the kind of people who know
            the difference between a hand-set stone and a hot-fix one.
          </p>
          <Link to="/about" className="btn-ghost">
            Read our story
            <ArrowRight className="ghost-arrow w-4 h-4 ml-1" strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </section>
  )
}
