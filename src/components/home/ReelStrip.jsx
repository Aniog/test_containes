import { useRef } from "react"
import { scenes } from "../../data/scenery.js"
import { PlayIcon } from "../ui/Icons.jsx"

const reels = [
  { id: 1, image: scenes.ugc1, caption: "Worn close.", handle: "@maya.k" },
  { id: 2, image: scenes.ugc2, caption: "Huggies first.", handle: "@noor.studios" },
  { id: 3, image: scenes.ugc3, caption: "One cuff, ten outfits.", handle: "@leah.ren" },
  { id: 4, image: scenes.ugc4, caption: "Layered forever.", handle: "@thevelvet" },
  { id: 5, image: scenes.ugc5, caption: "Sundays with amber.", handle: "@isabelm" },
  { id: 6, image: scenes.ugc6, caption: "The heirloom set.", handle: "@jules.di" },
]

export default function ReelStrip() {
  const railRef = useRef(null)

  const scrollBy = (dir) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section className="bg-espresso text-ivory py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-ivory/55">Worn by you</p>
            <h2 className="display-serif text-[36px] md:text-[52px] mt-3 leading-[1.05]">
              In <span className="italic font-light text-champagne-soft">stillness</span>, on repeat.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="h-10 w-10 inline-flex items-center justify-center border border-ivory/20 text-ivory/80 hover:border-ivory/60 hover:text-ivory transition-colors"
            >
              <span className="block rotate-180">
                <PlayIcon className="h-3.5 w-3.5" />
              </span>
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="h-10 w-10 inline-flex items-center justify-center border border-ivory/20 text-ivory/80 hover:border-ivory/60 hover:text-ivory transition-colors"
            >
              <PlayIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 lg:px-16 pb-2 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] snap-start overflow-hidden bg-espresso-soft group"
          >
            <img
              src={reel.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-espresso/0 via-espresso/10 to-espresso/85" />
            <div className="absolute top-3 right-3 h-7 w-7 inline-flex items-center justify-center rounded-full bg-ivory/15 backdrop-blur-sm text-ivory">
              <PlayIcon className="h-3 w-3" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif italic text-[22px] md:text-[26px] leading-tight">
                {reel.caption}
              </p>
              <p className="mt-2 text-[10px] tracking-eyebrow uppercase text-ivory/60">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
