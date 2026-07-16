import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        {/* Image */}
        <div className="relative overflow-hidden">
          <div
            className="aspect-[4/5] w-full md:aspect-auto md:h-full"
            data-strk-bg-id="story-bg-velmora-02"
            data-strk-bg="[story-text] [story-title] artisan crafting gold jewelry in studio warm light"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center px-0 py-12 md:px-16 md:py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Est. 2019
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Jewelry with a
            <br />
            Quiet Confidence
          </h2>
          <p
            id="story-text"
            className="mt-6 max-w-md text-sm leading-relaxed text-stone md:text-[15px]"
          >
            Velmora began with a simple belief: luxury shouldn't shout. Each
            piece is hand-finished in 18K gold plating over sterling silver,
            designed to be worn daily and treasured for years. We work in small
            batches, with materials chosen for their longevity and their
            kindness to skin.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone md:text-[15px]">
            From the studio bench to your jewelry box, every detail is
            considered — because the pieces you reach for every day deserve to
            be made with care.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink underline-offset-8 transition-colors hover:text-gold hover:underline"
          >
            Our Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
