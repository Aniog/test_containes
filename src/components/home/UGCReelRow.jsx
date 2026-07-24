import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const REELS = [
  {
    id: "reel-1",
    handle: "@noor.styles",
    caption: "Layered every day",
    query:
      "vertical video still of woman wearing layered gold necklaces and gold huggie earrings on warm beige background, soft natural light, fashion editorial",
  },
  {
    id: "reel-2",
    handle: "@ameliadaily",
    caption: "The everyday huggie",
    query:
      "vertical video still of close up ear with chunky gold dome huggie earring, model in profile on cream background, soft natural light",
  },
  {
    id: "reel-3",
    handle: "@marlow.jewels",
    caption: "Stacks in the wild",
    query:
      "vertical video still of woman stacking gold rings and crystal bracelets on warm linen, soft golden hour light, editorial style",
  },
  {
    id: "reel-4",
    handle: "@kira.evelyn",
    caption: "The crystal necklace",
    query:
      "vertical video still of woman wearing multicolor crystal pendant necklace on neutral cashmere sweater, warm soft light, fashion editorial",
  },
  {
    id: "reel-5",
    handle: "@elenamood",
    caption: "Brunch, in gold",
    query:
      "vertical video still of woman in white blouse wearing gold filigree drop earrings at brunch, soft daylight, fashion editorial",
  },
  {
    id: "reel-6",
    handle: "@sienna.gold",
    caption: "A close-set staple",
    query:
      "vertical video still of model wearing two gold huggies and one ear cuff on dark background, close up of ear, soft warm light",
  },
  {
    id: "reel-7",
    handle: "@lumiere.daily",
    caption: "Pearl & gold",
    query:
      "vertical video still of woman wearing gold hoop earrings with freshwater pearl on warm beige background, soft natural light",
  },
  {
    id: "reel-8",
    handle: "@harriet.notes",
    caption: "The heirloom set",
    query:
      "vertical video still of woman opening velvet jewelry gift box on linen, soft warm light, editorial still life",
  },
]

export default function UGCReelRow() {
  const scrollerRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  useEffect(() => {
    if (!scrollerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, scrollerRef.current)
  }, [])

  const updateButtons = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateButtons()
    el.addEventListener("scroll", updateButtons, { passive: true })
    window.addEventListener("resize", updateButtons)
    return () => {
      el.removeEventListener("scroll", updateButtons)
      window.removeEventListener("resize", updateButtons)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" })
  }

  return (
    <section className="bg-paper-2 py-20 md:py-32">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="flex flex-col items-baseline justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">@velmora · Tagged</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-5xl">
              Worn by you
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:bg-transparent disabled:hover:text-ink"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:mt-14 md:gap-5 md:px-8"
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative aspect-[9/16] w-[68vw] flex-shrink-0 snap-start overflow-hidden bg-ink sm:w-[42vw] md:w-[280px] lg:w-[300px]"
          >
            <img
              alt={`${reel.handle} wearing Velmora jewelry`}
              data-strk-img-id={`${reel.id}-thumb`}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,17,15,0) 55%, rgba(20,17,15,0.75) 100%)",
              }}
            />
            {/* Play icon */}
            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-paper/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.28em] text-paper backdrop-blur-sm">
              <Play className="h-3 w-3" strokeWidth={1.5} />
              Reel
            </div>
            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-xl italic font-light leading-tight text-paper md:text-2xl">
                {reel.caption}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-paper/80">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
        <div className="w-1 flex-shrink-0" aria-hidden />
      </div>
    </section>
  )
}
