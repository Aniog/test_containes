import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowRight } from "lucide-react"
import strkImgConfig from "@/strk-img-config.json"

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7d34fa"
        data-strk-bg="[hero-headline] [hero-eyebrow]"
        data-strk-bg-ratio="4x5"
        data-strk-bg-width="1600"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(19,17,15,0.35) 0%, rgba(19,17,15,0.55) 60%, rgba(19,17,15,0.85) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(201,168,117,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-editorial h-full px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl">
          <p
            id="hero-eyebrow"
            className="text-[11px] md:text-[12px] tracking-widest3 uppercase text-bone/80 mb-6"
          >
            Velmora — Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-[44px] leading-[1.05] sm:text-[56px] md:text-[80px] lg:text-[88px] text-bone"
          >
            Crafted to be{" "}
            <span className="italic font-light text-gold-soft">treasured</span>.
          </h1>
          <p className="mt-6 text-[15px] md:text-[17px] text-bone/80 max-w-lg leading-relaxed">
            Quiet, hand-finished demi-fine pieces — 18K gold plated, made to
            outlast the season.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 h-12 px-7 bg-bone text-ink text-[12px] tracking-widest2 uppercase hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 h-12 px-2 text-[12px] tracking-widest2 uppercase text-bone/85 hover:text-gold transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bone/60 text-[10px] tracking-widest3 uppercase flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-8 bg-bone/40" />
      </div>
    </section>
  )
}
