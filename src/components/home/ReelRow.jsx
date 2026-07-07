import React, { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ReelFrame } from "@/components/ui/JewelryArt"
import SectionHeader from "@/components/ui/SectionHeader"

const reels = [
  {
    handle: "@noor.evelyn",
    caption: "Vivid Aura on slow Sundays",
    palette: "model",
    variant: 0,
  },
  {
    handle: "@amélie.says",
    caption: "Layering the Majestic Flora",
    palette: "rosewood",
    variant: 1,
  },
  {
    handle: "@isla.mira",
    caption: "Holding my heirloom",
    palette: "oxblood",
    variant: 2,
  },
  {
    handle: "@saoirse.gold",
    caption: "Sphere Huggies, every single day",
    palette: "sand",
    variant: 3,
  },
  {
    handle: "@mara.jewels",
    caption: "The lace drop, candlelit",
    palette: "aubergine",
    variant: 0,
  },
  {
    handle: "@lyra.frances",
    caption: "Heirloom unboxing",
    palette: "midnight",
    variant: 2,
  },
  {
    handle: "@the.olive.edit",
    caption: "Three ways: the Flora",
    palette: "rosewood",
    variant: 1,
  },
  {
    handle: "@nina.wears",
    caption: "Huggies for the wedding",
    palette: "model",
    variant: 3,
  },
]

const ReelCard = ({ reel, i }) => {
  const videoRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = videoRef.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.5 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <article
      ref={videoRef}
      className="relative shrink-0 w-[200px] sm:w-[240px] lg:w-[260px] aspect-[9/16] overflow-hidden bg-ink group"
    >
      <ReelFrame palette={reel.palette} variant={reel.variant} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/85" />
      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-ink/40 backdrop-blur-sm text-[10px] font-sans uppercase tracking-[0.18em] text-ivory/90">
        Reel
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-ivory">
        <p className="font-serif text-[17px] sm:text-lg leading-snug">
          {reel.caption}
        </p>
        <p className="mt-2 text-[10px] font-sans uppercase tracking-[0.18em] text-ivory/70">
          {reel.handle}
        </p>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-ivory/0 group-hover:ring-ivory/15 transition-all duration-500" />
    </article>
  )
}

const ReelRow = () => {
  const trackRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const update = () => {
    const el = trackRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 8)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }

  useEffect(() => {
    update()
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" })
  }

  return (
    <section className="section-pad bg-ivory-warm">
      <div className="container-wrap">
        <div className="mb-10 lg:mb-14 flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="#velmoraworn"
            title="From our community"
            align="left"
          />
          <div className="hidden sm:flex items-center gap-2 pb-1">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className={`h-10 w-10 rounded-full border border-hairline text-ink transition-all duration-300 flex items-center justify-center ${
                showLeft ? "opacity-100 hover:border-ink" : "opacity-30 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className={`h-10 w-10 rounded-full border border-hairline text-ink transition-all duration-300 flex items-center justify-center ${
                showRight ? "opacity-100 hover:border-ink" : "opacity-30 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth px-5 sm:px-8 lg:px-12 pb-2"
      >
        {reels.map((reel, i) => (
          <ReelCard key={i} reel={reel} i={i} />
        ))}
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>
    </section>
  )
}

export default ReelRow
