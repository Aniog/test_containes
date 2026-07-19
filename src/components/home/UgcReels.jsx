import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const reels = [
  { id: "morning-stack", caption: "Morning stack, softly lit", titleId: "reel-morning-title", descId: "reel-morning-desc" },
  { id: "golden-huggies", caption: "Golden huggies after dusk", titleId: "reel-huggies-title", descId: "reel-huggies-desc" },
  { id: "necklace-layer", caption: "A necklace made for linen", titleId: "reel-necklace-title", descId: "reel-necklace-desc" },
  { id: "gift-unboxing", caption: "The gift box moment", titleId: "reel-gift-title", descId: "reel-gift-desc" },
  { id: "ear-cuff", caption: "One cuff, endless polish", titleId: "reel-cuff-title", descId: "reel-cuff-desc" },
]

export default function UgcReels() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} id="journal" className="bg-velmora-linen py-16 text-velmora-ink sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Seen in Velmora</p>
            <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink">Golden in Motion</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-velmora-clay md:block">
            A reel-inspired strip of quiet styling moments from everyday wear to occasion-ready glow.
          </p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4 no-scrollbar">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-velmora-espresso shadow-soft sm:w-64">
              <img
                alt={reel.caption}
                className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
                data-strk-img-id={`ugc-${reel.id}-9x16`}
                data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-velmora-cream">
                <h3 id={reel.titleId} className="font-serif text-2xl font-medium leading-tight">{reel.caption}</h3>
                <p id={reel.descId} className="mt-2 text-xs uppercase tracking-luxe text-velmora-champagne">#VelmoraFine</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
