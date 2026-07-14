import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { StockImage } from "@/components/ui/StockImage"

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory-100 pt-24 md:pt-28">
      <div className="container-x">
        <div className="py-12 md:py-20">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] text-ink-500 sm:text-6xl lg:text-7xl">
            Quiet luxury, made
            <em className="font-light not-italic text-gold-500"> to last.</em>
          </h1>
        </div>
      </div>

      <div className="container-x grid items-center gap-10 pb-20 md:grid-cols-12 md:gap-16 md:pb-28">
        <div className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-ink-600">
            <StockImage
              imgId="about-img-1"
              query="about-headline about-body"
              ratio="4x5"
              width="900"
              alt="Inside the Velmora atelier"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <p
            id="about-body"
            className="font-serif text-[19px] leading-relaxed text-ink-300 md:text-[20px]"
          >
            Velmora began with a small collection of hand-finished pieces and
            a simple idea: that fine jewelry should feel personal, not precious.
            We work in small batches, plate every piece in 18K gold, and choose
            stones one at a time.
          </p>
          <p className="mt-5 font-serif text-[19px] leading-relaxed text-ink-300 md:text-[20px]">
            We believe a piece you wear every day — to the office, to dinner, to
            bed — is the most beautiful kind of jewelry. So we make ours to be
            lived in. Quietly, daily, for a long time.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-taupe-200 pt-8">
            {[
              { v: "18K", l: "Gold plated" },
              { v: "30", l: "Day returns" },
              { v: "1%", l: "For the planet" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif text-3xl text-ink-500 md:text-4xl">
                  {s.v}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider2 text-ink-200">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
