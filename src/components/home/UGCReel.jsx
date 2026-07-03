import React from "react"

const REEL = [
  {
    id: "reel-ear-stack",
    handle: "@maya.in.gold",
    caption: "the everyday stack",
    imgId: "ugc-reel-1-7f3a2b",
    query: "woman gold ear stack closeup editorial warm light",
  },
  {
    id: "reel-amber-lace",
    handle: "@noor.studios",
    caption: "Amber Lace, styled two ways",
    imgId: "ugc-reel-2-c1d4e9",
    query: "gold filigree drop earrings on model warm natural light",
  },
  {
    id: "reel-flora-pendant",
    handle: "@thevelvetedit",
    caption: "layering the Flora pendant",
    imgId: "ugc-reel-3-8a2f6c",
    query: "multicolor crystal pendant necklace on model soft warm light",
  },
  {
    id: "reel-huggies",
    handle: "@saoirse.daily",
    caption: "Huggies I never take off",
    imgId: "ugc-reel-4-5b9e3d",
    query: "model wearing chunky gold huggie hoop earrings portrait",
  },
  {
    id: "reel-heirloom",
    handle: "@oliveandore",
    caption: "the heirloom set, unboxed",
    imgId: "ugc-reel-5-2f7c1a",
    query: "gold pendant earring gift set on linen natural light",
  },
  {
    id: "reel-aura-cuff",
    handle: "@studio.aria",
    caption: "Vivid Aura with a slip dress",
    imgId: "ugc-reel-6-9d4b8e",
    query: "woman wearing gold crystal ear cuff fashion editorial",
  },
]

export default function UGCReel() {
  return (
    <section
      aria-labelledby="ugc-title"
      className="bg-espresso py-20 md:py-28"
    >
      <div className="container-velmora">
        <div className="flex flex-col items-baseline justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-champagne-200">
              #WornInVelmora
            </p>
            <h2
              id="ugc-title"
              className="mt-3 font-serif text-[32px] leading-[1.1] tracking-tight text-ivory sm:text-[40px] md:text-[48px]"
            >
              From the community
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-ivory-300/75">
              Real ways our community wears Velmora — saved to your
              inspiration, shared with ours.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:text-champagne-200"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-14">
        <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:gap-6 md:px-12 lg:px-[max(48px,calc((100vw-1280px)/2))]">
          {REEL.map((card) => (
            <li
              key={card.id}
              className="relative aspect-[9/16] w-[58vw] max-w-[260px] shrink-0 snap-start overflow-hidden bg-espresso-200 sm:w-[240px] md:max-w-[280px]"
            >
              <img
                alt={card.caption}
                data-strk-img-id={card.imgId}
                data-strk-img={`[ugc-${card.id}-caption] [ugc-${card.id}-handle] [ugc-title] gold jewelry on model warm light`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="540"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p
                  id={`ugc-${card.id}-caption`}
                  className="font-serif text-lg italic text-ivory"
                >
                  {card.caption}
                </p>
                <p
                  id={`ugc-${card.id}-handle`}
                  className="mt-1 font-sans text-[11px] uppercase tracking-widest2 text-ivory-300/80"
                >
                  {card.handle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
