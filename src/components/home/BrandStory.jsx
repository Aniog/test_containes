import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"
import Reveal from "@/components/ui/Reveal"

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory-soft py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1" as="div">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-espresso-deep">
              <img
                data-strk-img-id="brand-story-main"
                data-strk-img="hands of jeweler crafting gold jewelry warm workshop editorial"
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                alt="Velmora atelier — demi-fine jewelry crafted by hand"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center bg-ivory/90 px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase text-espresso">
                Est. 2021 — Atelier No. 4
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={120} as="div">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-espresso leading-[1.05] tracking-tight">
              Quietly made.<br />Meant to be lived in.
            </h2>
            <p className="mt-6 text-base md:text-lg text-espresso-soft leading-relaxed max-w-lg">
              Velmora began at a kitchen table in Lisbon, with one pair of gold
              huggies and a sketchbook. Today we craft small batches of demi-fine
              jewelry — heavy enough to feel like an heirloom, light enough to forget
              you’re wearing it.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed max-w-lg">
              Every piece is plated in 18K gold over a hypoallergenic base, finished
              by hand, and packaged in recyclable materials. Because what you wear
              close to your skin should be made with care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div>
                <p className="font-serif text-3xl text-espresso">18K</p>
                <p className="eyebrow mt-1">Gold Plated</p>
              </div>
              <div className="h-10 w-px bg-hairline" />
              <div>
                <p className="font-serif text-3xl text-espresso">100%</p>
                <p className="eyebrow mt-1">Hypoallergenic</p>
              </div>
              <div className="h-10 w-px bg-hairline" />
              <div>
                <p className="font-serif text-3xl text-espresso">12k+</p>
                <p className="eyebrow mt-1">Pieces Sent</p>
              </div>
            </div>

            <Link to="/about" className="mt-9 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-espresso border-b border-espresso pb-1 hover:text-gold-deep hover:border-gold-deep transition-colors">
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}