import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function BrandStory() {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  return (
    <section
      id="home-story"
      className="bg-ink text-bone py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft order-2 lg:order-1">
          <img
            alt="Velmora atelier — hand-finishing a piece of demi-fine jewelry"
            data-strk-img-id="home-story-img"
            data-strk-img="[home-story-text] [home-story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne mb-6">
            Our Story
          </p>
          <h2
            id="home-story-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1]"
          >
            Jewelry that moves with
            <br className="hidden md:block" />
            <span className="italic text-champagne">your life</span>.
          </h2>
          <p
            id="home-story-text"
            className="mt-6 md:mt-8 text-bone/75 text-[15px] md:text-[16px] leading-relaxed max-w-md"
          >
            Velmora began with a simple idea: that fine jewelry shouldn't be
            reserved for the box it came in. We hand-finish every piece in
            warm 18K gold plate, designed in small batches to be worn — to
            the office, to dinner, to bed — and to outlast the trend cycle.
          </p>
          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-2 text-[11px] tracking-widest3 uppercase text-bone hover:text-champagne transition-colors duration-300"
          >
            Our Story
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
