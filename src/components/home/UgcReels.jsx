import { Instagram } from "lucide-react"
import { StrkImage } from "@/components/StrkImage"
import { Reveal } from "@/components/Reveal"

const REELS = [
  { id: "aurora", handle: "@aurora.wears", caption: "Golden hour, layered lobes" },
  { id: "sienna", handle: "@sienna.mae", caption: "The huggies I never take off" },
  { id: "eloise", handle: "@eloise.jpeg", caption: "A little neck stack moment" },
  { id: "noor", handle: "@noor.styles", caption: "Date night, but make it gold" },
  { id: "margaux", handle: "@margaux.daily", caption: "Quiet luxury in one cuff" },
  { id: "talia", handle: "@talia.rose", caption: "My everyday armour" },
]

export function UgcReels() {
  return (
    <section className="border-t border-line bg-cream py-16 md:py-24">
      <div className="container">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
            <Instagram className="size-3.5" />
            @velmora.jewelry
          </p>
          <h2 id="ugc-heading" className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
            Worn by You
          </h2>
          <p className="mt-3 text-sm text-ink-soft">Tag us to be featured — real pieces, real moments.</p>
        </Reveal>
      </div>

      <Reveal className="mt-10 md:mt-14" delay={120}>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 no-scrollbar md:justify-center md:overflow-visible md:px-0">
          {REELS.map((reel) => {
            const captionId = `ugc-${reel.id}-caption`
            return (
              <div
                key={reel.id}
                className="group relative w-[170px] shrink-0 snap-start overflow-hidden rounded-sm bg-espresso md:w-[190px]"
              >
                <div className="aspect-[9/16]">
                  <StrkImage
                    imgId={`ugc-reel-${reel.id}-9f2c`}
                    query={`[${captionId}] [ugc-heading] vertical close-up of a woman wearing delicate gold jewelry, warm cinematic light`}
                    ratio="9x16"
                    width={500}
                    alt={reel.caption}
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p id={captionId} className="font-serif text-sm italic leading-snug text-ivory">
                    "{reel.caption}"
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-ivory/60">{reel.handle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
