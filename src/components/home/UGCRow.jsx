import React from 'react'

const ugcItems = [
  { caption: 'Golden hour with my Golden Spheres', imgId: 'ugc-golden-sphere-01' },
  { caption: 'Everyday stack in warm light', imgId: 'ugc-everyday-stack-02' },
  { caption: 'Date night with the Flora Nectar', imgId: 'ugc-flora-nectar-03' },
  { caption: 'The Vivid Aura cuff moment', imgId: 'ugc-vivid-aura-04' },
  { caption: 'Amber Lace in the afternoon sun', imgId: 'ugc-amber-lace-05' },
  { caption: 'Royal Heirloom, gifted & treasured', imgId: 'ugc-royal-heirloom-06' },
]

export default function UGCRow() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-wide text-charcoal">
          Worn by You
        </h2>
        <div className="w-10 h-px bg-gold/40 mx-auto mt-4" />
        <p className="text-sm text-taupe mt-4 font-sans">
          Tag <span className="text-charcoal">@velmora</span> for a chance to be featured.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-stone overflow-hidden relative mb-3 rounded-sm">
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
                data-strk-img={`[ugc-caption-${i}] gold jewelry worn by woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                data-strk-img-id={item.imgId}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p
              className="font-serif text-sm italic text-taupe text-center leading-snug"
            >
              &ldquo;<span id={`ugc-caption-${i}`}>{item.caption}</span>&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}