import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-content items-stretch gap-0 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-auto">
          <img
            alt="Velmora atelier"
            data-strk-img-id="story-img-2b8e1f"
            data-strk-img="[story-subtitle] [story-title] gold jewelry atelier craftsmanship"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-0 py-12 md:px-14 md:py-0">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 max-w-md text-sm leading-relaxed text-stone"
          >
            Velmora began with a simple belief: fine jewelry shouldn't wait for
            special occasions. Each piece is hand-finished in 18K gold plating,
            hypoallergenic and made to be worn from morning to night — through
            work, weekends, and everything in between.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
            We design in small, considered collections, so every detail earns
            its place. The result is jewelry that feels heirloom, without the
            heirloom price.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
