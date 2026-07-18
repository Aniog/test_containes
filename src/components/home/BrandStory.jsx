import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-sand">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-cream md:aspect-auto">
          <img
            alt="Velmora atelier — hand-finishing gold jewelry"
            data-strk-img-id="story-img-velmora-7d8e9f"
            data-strk-img="[story-body] [story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center bg-sand px-8 py-12 md:px-14 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-taupe">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-3xl leading-tight text-espresso md:text-4xl"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p
            id="story-body"
            className="mt-6 max-w-md text-sm leading-relaxed text-taupe"
          >
            Velmora began with a simple belief — that fine jewelry should be
            worn, not locked away. Each piece is hand-finished in warm 18K gold
            plating, designed in our studio and made to move with you from
            morning to evening. No noise, no trends — just gold that earns its
            place in your everyday.
          </p>
          <div className="mt-8">
            <Button as={Link} to="/about" variant="outline" size="md">
              Read Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
