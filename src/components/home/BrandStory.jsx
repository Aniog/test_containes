import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/lib/useReveal"

export default function BrandStory() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-taupe-100 py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image left */}
          <div className="reveal lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-espresso-100">
              <img
                data-strk-img-id="brand-story-image-7d3a"
                data-strk-img="[brand-story-quote] [brand-story-title] [velmora fine jewelry]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="A founder at work in the Velmora atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text right */}
          <div className="lg:col-span-6 reveal" style={{ transitionDelay: "120ms" }}>
            <p className="eyebrow">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-[36px] sm:text-[48px] lg:text-[56px] mt-4 text-espresso leading-[1.05]"
            >
              Designed in our studio.{" "}
              <span className="italic text-gold-600">Made to last.</span>
            </h2>
            <p
              id="brand-story-quote"
              className="mt-7 text-[16px] sm:text-[17px] leading-[1.75] text-mocha-500 max-w-xl font-light"
            >
              Velmora began as a small idea — that demi-fine jewelry should feel
              like fine jewelry. Every piece is sketched in our Brooklyn studio,
              then hand-finished by the same workshops we've worked with for
              years. 18K gold plating you can shower in. Stones set by hand.
              Packaging worth keeping.
            </p>
            <p className="mt-5 text-[16px] leading-[1.75] text-mocha-500 max-w-xl font-light">
              We don't do trends. We do treasure — for the everyday, for gifts,
              and for the moments worth marking.
            </p>
            <Link
              to="/about"
              className="link-underline mt-9 text-[12px] uppercase tracking-wider-3 font-medium"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
