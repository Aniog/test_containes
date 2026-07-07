import React from "react"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ReelsRow({ reels }) {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-editorial">
        <div className="reveal flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-gold-light">@velmora</p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ivory md:text-5xl">
              Worn by You
            </h2>
          </div>
          <p className="hidden max-w-xs font-serif text-base italic text-ivory/60 sm:block">
            Real moments, real wear. Tag #Velmora to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="reveal no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="group relative aspect-[9/16] w-[60vw] shrink-0 snap-start overflow-hidden bg-ink-soft sm:w-[42vw] md:w-[30vw] lg:w-[22vw]"
          >
            <img
              src={PLACEHOLDER}
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-ivory"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
