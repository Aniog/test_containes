import { useRef } from "react"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import StrkImage from "@/components/StrkImage"

const REELS = [
  {
    id: "reel-1",
    handle: "@noorastyles",
    caption: "everyday stack",
    img: {
      id: "reel-1-img",
      query: "[reel-1-caption] [reels-title] gold jewelry ear stack editorial",
      ratio: "9x16",
      width: 600,
      alt: "Gold ear stack on model",
    },
  },
  {
    id: "reel-2",
    handle: "@marigold",
    caption: "morning light",
    img: {
      id: "reel-2-img",
      query: "[reel-2-caption] [reels-title] gold necklace morning light portrait",
      ratio: "9x16",
      width: 600,
      alt: "Gold necklace in morning light",
    },
  },
  {
    id: "reel-3",
    handle: "@elenavk",
    caption: "soft golds",
    img: {
      id: "reel-3-img",
      query: "[reel-3-caption] [reels-title] soft gold huggies editorial portrait",
      ratio: "9x16",
      width: 600,
      alt: "Soft gold huggies close-up",
    },
  },
  {
    id: "reel-4",
    handle: "@fennelley",
    caption: "the heirloom set",
    img: {
      id: "reel-4-img",
      query: "[reel-4-caption] [reels-title] gold jewelry heirloom set editorial",
      ratio: "9x16",
      width: 600,
      alt: "Heirloom jewelry set on model",
    },
  },
  {
    id: "reel-5",
    handle: "@anjahouse",
    caption: "a touch of gold",
    img: {
      id: "reel-5-img",
      query: "[reel-5-caption] [reels-title] gold jewelry model portrait editorial",
      ratio: "9x16",
      width: 600,
      alt: "Gold jewelry portrait",
    },
  },
  {
    id: "reel-6",
    handle: "@sienna.mae",
    caption: "for the ceremony",
    img: {
      id: "reel-6-img",
      query: "[reel-6-caption] [reels-title] gold jewelry ceremony elegant portrait",
      ratio: "9x16",
      width: 600,
      alt: "Gold jewelry for ceremony",
    },
  },
  {
    id: "reel-7",
    handle: "@thevelmora",
    caption: "from our atelier",
    img: {
      id: "reel-7-img",
      query: "[reel-7-caption] [reels-title] gold jewelry atelier hands editorial",
      ratio: "9x16",
      width: 600,
      alt: "Jewelry atelier hands at work",
    },
  },
]

export default function UGCReels() {
  const trackRef = useRef(null)

  function scrollBy(delta) {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-32 bg-base">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow flex items-center gap-2" id="reels-eyebrow">
              <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>From the community</span>
            </p>
            <h2
              id="reels-title"
              className="display text-3xl md:text-5xl mt-3"
            >
              Worn by you
            </h2>
            <p
              id="reels-subtitle"
              className="mt-3 text-ink-secondary max-w-md text-sm md:text-base"
            >
              Tag <span className="text-accent">@velmora</span> on Instagram for
              a chance to be featured.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-360)}
              className="w-11 h-11 border border-line-strong text-ink-primary hover:border-accent hover:text-accent transition-colors duration-300 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(360)}
              className="w-11 h-11 border border-line-strong text-ink-primary hover:border-accent hover:text-accent transition-colors duration-300 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal track — bleeds past container on mobile */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-12 lg:container-site lg:px-12"
      >
        {REELS.map((reel) => (
          <figure
            key={reel.id}
            className="relative flex-shrink-0 w-[68vw] sm:w-[260px] md:w-[260px] lg:w-[280px] aspect-[9/16] overflow-hidden bg-surface snap-start"
          >
            <StrkImage
              id={reel.img.id}
              query={reel.img.query}
              ratio={reel.img.ratio}
              width={reel.img.width}
              alt={reel.img.alt}
              imgClassName="absolute inset-0 w-full h-full object-cover"
            />
            {/* Bottom-up gradient for caption legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,13,11,0) 40%, rgba(14,13,11,0.85) 100%)",
              }}
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p
                id={`reel-${reel.id}-caption`}
                className="font-serif italic text-xl md:text-2xl text-ink-primary text-balance"
              >
                {reel.caption}
              </p>
              <p className="mt-1.5 font-sans text-[11px] uppercase tracking-eyebrow text-ink-secondary">
                {reel.handle}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
