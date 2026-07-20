const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const reels = [
  { id: 'morning-stack', caption: 'Morning gold stack', titleId: 'ugc-morning-title', descId: 'ugc-morning-desc', desc: 'Layered huggies and ear cuff in warm window light.' },
  { id: 'gift-moment', caption: 'A gift worth keeping', titleId: 'ugc-gift-title', descId: 'ugc-gift-desc', desc: 'Velmora necklace unboxed beside silk ribbon.' },
  { id: 'dinner-glow', caption: 'Dinner hour shimmer', titleId: 'ugc-dinner-title', descId: 'ugc-dinner-desc', desc: 'Gold drop earrings worn for an evening out.' },
  { id: 'neck-edit', caption: 'The neckline edit', titleId: 'ugc-neck-title', descId: 'ugc-neck-desc', desc: 'Crystal necklace layered over a neutral slip dress.' },
  { id: 'weekend-huggies', caption: 'Weekend huggies', titleId: 'ugc-weekend-title', descId: 'ugc-weekend-desc', desc: 'Chunky gold huggies styled with soft knitwear.' },
]

export default function UgcReels() {
  return (
    <section id="journal" className="overflow-hidden bg-velmora-forest py-16 text-velmora-cream md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">Seen on you</p>
            <h2 className="font-serif text-4xl leading-tight text-velmora-cream md:text-6xl">Quiet shine, in motion</h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-7 text-velmora-champagne">A reel-style glimpse at the pieces our community reaches for: soft sparkle, warm gold, and effortless styling.</p>
        </div>
      </div>
      <div className="mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-3 md:px-8 lg:px-12 [scrollbar-width:none]">
        {reels.map((reel) => (
          <article key={reel.id} className="group relative h-[28rem] w-[16rem] flex-none snap-start overflow-hidden bg-velmora-ink md:h-[34rem] md:w-[19rem]">
            <img
              alt={reel.caption}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              data-strk-img-id={`ugc-${reel.id}-9x16`}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src={placeholder}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-cream">
              <p id={reel.descId} className="sr-only">{reel.desc}</p>
              <h3 id={reel.titleId} className="font-serif text-3xl leading-none text-velmora-cream">{reel.caption}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
