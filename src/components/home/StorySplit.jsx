import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowUpRight } from "lucide-react"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"

export default function StorySplit() {
  const [ref, visible] = useReveal()
  const imgRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imgRef.current)
  }, [])

  return (
    <section
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} bg-bone-warm text-ink`}
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div
          ref={imgRef}
          className="md:col-span-6 relative aspect-[4/5] w-full overflow-hidden bg-umber"
        >
          <div
            data-strk-bg-id="story-img-77a31e"
            data-strk-bg="[story-subtitle] [story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1200"
            className="absolute inset-0"
          />
        </div>

        <div className="md:col-span-6">
          <p
            id="story-eyebrow"
            className="text-[11px] tracking-widest3 uppercase text-ink/60"
          >
            The House of Velmora
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-[40px] md:text-[56px] leading-[1.05] text-ink"
          >
            Quiet design,{" "}
            <span className="italic font-light">made to last</span>.
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 text-[15px] md:text-[16px] leading-relaxed text-ink/75 max-w-lg"
          >
            We started Velmora with a single idea: demi-fine jewelry should
            feel like it was made for you — the weight, the warmth, the way
            it catches the light. Every piece is hand-finished in small
            batches, plated in 18K gold over a recycled base, and inspected
            before it leaves the studio.
          </p>
          <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-ink/75 max-w-lg">
            Designed in New York. Worn everywhere.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-ink hover:text-gold-deep transition-colors group"
          >
            Our Story
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
