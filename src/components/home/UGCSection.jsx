import { useEffect, useRef } from "react"
import { ugcReels } from "@/data/products"

export default function UGCSection() {
  const scrollRef = useRef(null)

  return (
    <section className="py-20 md:py-24 bg-espresso">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold/70 mb-3">As Seen On You</p>
            <h2 className="text-3xl md:text-4xl text-white font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
              Worn in Real Life
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/50 text-xs tracking-wider uppercase">
            <span>Swipe to explore</span>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-6 pb-4 hide-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => {
          const el = scrollRef.current
          if (!el) return
          const startX = e.pageX - el.offsetLeft
          const scrollLeft = el.scrollLeft
          const onMove = (ev) => {
            ev.preventDefault()
            el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX)
          }
          const onUp = () => {
            document.removeEventListener("mousemove", onMove)
            document.removeEventListener("mouseup", onUp)
          }
          document.addEventListener("mousemove", onMove)
          document.addEventListener("mouseup", onUp)
        }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[220px] md:w-[280px] aspect-[9/16] relative overflow-hidden group"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                className="text-white text-sm md:text-base leading-snug font-light italic"
                style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}
              >
                &ldquo;{reel.caption}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}