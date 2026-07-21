import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  return (
    <section
      id="home-hero"
      className="relative w-full bg-ink text-bone overflow-hidden"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1600"
      />
      {/* Subtle gradient overlay for legibility on top of the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70"
      />

      <div className="relative max-w-8xl mx-auto px-5 md:px-8 lg:px-12 pt-32 md:pt-44 lg:pt-52 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-2xl">
          <p
            id="home-hero-eyebrow"
            className="text-[10px] md:text-[11px] tracking-widest3 uppercase text-champagne/90 mb-6 md:mb-8"
          >
            Velmora · Fine Jewelry
          </p>
          <h1
            id="home-hero-title"
            className="font-serif font-light text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic font-normal text-champagne">treasured</span>.
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-6 md:mt-8 max-w-md text-bone/80 text-[15px] md:text-base leading-relaxed"
          >
            Demi-fine jewelry in warm 18K gold plate, hand-finished in small
            batches. Designed for the everyday and the moments that matter.
          </p>
          <div className="mt-9 md:mt-12 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/shop" variant="gold" size="lg">
              Shop the Collection
            </Button>
            <Link
              to="/shop?cat=necklaces"
              className="group inline-flex items-center gap-2 text-[11px] tracking-widest3 uppercase text-bone/90 hover:text-champagne transition-colors duration-300"
            >
              New Arrivals
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue, bottom-left */}
      <div className="absolute bottom-6 left-5 md:left-8 lg:left-12 hidden md:flex items-center gap-3 text-bone/60 text-[10px] tracking-widest3 uppercase">
        <span className="block w-8 h-px bg-bone/40" />
        Scroll
      </div>
    </section>
  )
}
