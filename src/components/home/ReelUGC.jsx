import React from "react"
import { Link } from "react-router-dom"
import { Instagram } from "lucide-react"

const REELS = [
  {
    id: "reel-1",
    imgId: "reel-1-img",
    handle: "@noor.evelyne",
    caption: "The Golden Sphere huggies — my every day",
  },
  {
    id: "reel-2",
    imgId: "reel-2-img",
    handle: "@marlowjewels",
    caption: "Vivid Aura, styled two ways",
  },
  {
    id: "reel-3",
    imgId: "reel-3-img",
    handle: "@sofia.gold",
    caption: "The Majestic Flora, worn to dinner",
  },
  {
    id: "reel-4",
    imgId: "reel-4-img",
    handle: "@amirastudio",
    caption: "Amber Lace for an autumn day",
  },
  {
    id: "reel-5",
    imgId: "reel-5-img",
    handle: "@lina.kaya",
    caption: "The Royal Heirloom, gifted",
  },
  {
    id: "reel-6",
    imgId: "reel-6-img",
    handle: "@ren.home",
    caption: "Heirloom set unboxing",
  },
]

export default function ReelUGC() {
  return (
    <section className="bg-cream-deep section-pad">
      <div className="mx-auto max-w-page px-6 md:px-12">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="kicker">Worn by you</p>
            <h2 className="mt-3 headline-md text-espresso">
              Styled in the wild
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 underline-link"
          >
            <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
            Follow @velmora
          </a>
        </div>

        <div className="-mx-6 md:-mx-12 px-6 md:px-12 overflow-x-auto no-scrollbar">
          <ul className="flex gap-4 md:gap-6 snap-x snap-mandatory pb-4">
            {REELS.map((reel) => (
              <li
                key={reel.id}
                className="snap-start flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px]"
              >
                <div className="relative aspect-portrait overflow-hidden bg-noir group">
                  <img
                    alt={reel.caption}
                    data-strk-img-id={reel.imgId}
                    data-strk-img={`[${reel.id}-caption] [${reel.id}-handle]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <p
                      id={`${reel.id}-caption`}
                      className="font-serif text-bone text-lg md:text-xl leading-snug"
                    >
                      {reel.caption}
                    </p>
                    <p
                      id={`${reel.id}-handle`}
                      className="mt-2 font-sans text-[10px] tracking-[0.24em] uppercase text-bone-soft"
                    >
                      {reel.handle}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
