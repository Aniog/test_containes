import { useRef } from "react"
import { UGC_REELS } from "@/lib/products"

const REEL_QUERIES = {
  "reel-1": "gold earrings worn by model close up ear editorial",
  "reel-2": "stack of gold rings on hand close up",
  "reel-3": "gold necklace on collarbone editorial portrait",
  "reel-4": "gold huggie earring on ear soft light",
  "reel-5": "woman wearing gold jewelry mirror selfie warm",
  "reel-6": "gift box of gold jewelry being opened hands",
}

export default function UGCReel() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector("[data-reel-card]")
    const step = card ? card.clientWidth + 16 : 280
    el.scrollBy({ left: dir * step * 1.5, behavior: "smooth" })
  }

  return (
    <section className="section bg-paper reveal" id="ugc">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-xl">
            <p className="eyebrow text-gold">@velmora · #wornbyyou</p>
            <h2 className="mt-3 font-serif text-ink text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
              Worn by you,<br />
              <span className="italic font-normal">in the wild.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-10 h-10 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-5 px-5 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 pb-4"
        >
          {UGC_REELS.map((reel) => (
            <article
              key={reel.id}
              data-reel-card
              className="snap-start shrink-0 w-[60vw] sm:w-[260px] md:w-[240px] aspect-[9/16] relative overflow-hidden bg-ink group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[${reel.id}-caption] ${REEL_QUERIES[reel.id] || "gold jewelry worn by model editorial"}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover img-placeholder transition-transform duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(27,23,20,0) 50%, rgba(27,23,20,0.75) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute top-3 right-3">
                <div className="w-7 h-7 rounded-full bg-cream/90 flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1B1714" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                <p
                  id={`${reel.id}-caption`}
                  className="font-serif italic text-[22px] leading-tight"
                >
                  {reel.caption}
                </p>
                <p className="mt-1 eyebrow-sm text-gold-soft">{reel.handle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
