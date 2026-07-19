import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <header className="container-x py-16 md:py-24 text-center max-w-3xl mx-auto">
        <p className="label-2 text-mist mb-4">Our Story</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
          Made to be worn, not stored.
        </h1>
        <p className="text-ink/80 text-base md:text-lg leading-relaxed">
          Velmora is a small studio making demi-fine jewelry for the
          in-between moments — the Tuesday, the second glass of wine, the
          quiet gifts that don&rsquo;t need an occasion.
        </p>
      </header>

      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pb-20 md:pb-28 items-center">
        <div className="aspect-[4/5] bg-bone overflow-hidden">
          <div
            data-strk-bg-id="about-img-1"
            data-strk-bg="[about-section-text] founder of small jewelry studio at workbench warm light"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 w-full h-full" />
        </div>
        <div className="max-w-lg">
          <p className="label-2 text-mist mb-3">The Studio</p>
          <h2
            id="about-section-text"
            className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-5"
          >
            Designed in small batches, finished by hand.
          </h2>
          <p className="text-ink/80 leading-relaxed mb-5">
            Every piece begins as a sketch. We work in brass, plate in
            18-karat gold, and finish each surface by hand so the pieces
            arrive looking — and feeling — the way they were drawn.
          </p>
          <p className="text-ink/80 leading-relaxed mb-8">
            We don&rsquo;t do trends, drops, or countdowns. We do materials
            that last, packaging that gets kept, and the kind of jewelry
            you forget you&rsquo;re wearing — until someone asks about it.
          </p>
          <Link to="/shop" className="btn-ghost">
            See the collection
            <ArrowRight className="ghost-arrow w-4 h-4 ml-1" strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </div>
  )
}
