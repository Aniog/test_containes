import { useEffect, useRef } from "react"
import { useImageHelper } from "@/hooks/useImageHelper"
import StrkImage from "@/components/ui/StrkImage"
import { Container } from "@/components/ui/Section"
import { UGC_REELS } from "@/data/content"

export default function UGCReel() {
  const containerRef = useRef(null)
  useImageHelper(containerRef)

  return (
    <section
      ref={containerRef}
      aria-label="Worn by you"
      className="bg-ink text-paper py-20 md:py-28"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow text-paper/60 mb-4">Worn By You</p>
            <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl text-paper">
              Real light,
              <br />
              <span className="italic font-light">real days</span>.
            </h2>
          </div>
          <p className="text-sm text-paper/70 max-w-xs leading-relaxed">
            From morning espresso to candlelit dinners — see how our community
            styles Velmora every day.
          </p>
        </div>
      </Container>

      <div className="overflow-x-auto no-scrollbar -mx-6 md:-mx-10 lg:-mx-16">
        <ul className="flex gap-3 md:gap-4 px-6 md:px-10 lg:px-16 pb-2">
          {UGC_REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden bg-ink-soft group"
            >
              <StrkImage
                imgId={`ugc-${reel.id}-img`}
                query={`[reel-${reel.id}-caption] [ugc-reel-eyebrow] ${reel.queryHint}`}
                ratio="9x16"
                width={600}
                alt={reel.caption}
                className="absolute inset-0 h-full w-full"
                imgClassName="duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(29,22,17,0) 50%, rgba(29,22,17,0.85) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="text-[10px] uppercase tracking-eyebrow text-paper/70 mb-2">
                  {reel.handle}
                </p>
                <p
                  id={`reel-${reel.id}-caption`}
                  className="font-serif italic text-xl md:text-2xl text-paper leading-tight"
                >
                  {reel.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
