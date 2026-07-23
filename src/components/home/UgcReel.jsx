const imageFallback = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

const reels = [
  { id: 'ear-stack', caption: 'The softest gold stack', desc: 'gold huggie earrings worn on ear', imgId: 'ugc-ear-stack-6d34fa' },
  { id: 'neck-glow', caption: 'A necklace with evening light', desc: 'floral crystal necklace on neck warm light', imgId: 'ugc-neck-glow-a6012f' },
  { id: 'gift-moment', caption: 'A little box, a lasting ritual', desc: 'luxury jewelry gift box gold necklace earrings', imgId: 'ugc-gift-moment-79bb18' },
  { id: 'everyday-huggies', caption: 'Huggies made for daily wear', desc: 'chunky gold dome huggie earrings worn', imgId: 'ugc-everyday-huggies-4f0d91' },
  { id: 'gold-detail', caption: 'Quiet shine, close up', desc: 'close up gold jewelry on model editorial', imgId: 'ugc-gold-detail-bc02a7' },
]

export default function UgcReel() {
  return (
    <section className="overflow-hidden bg-velmora-pearl py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">Worn by you</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">Velmora in motion</h2>
          </div>
          <p id="ugc-subtitle" className="hidden max-w-sm text-sm leading-6 text-velmora-ink/65 md:block">A reel-style glimpse of warm gold layers, soft light, and pieces styled for real days.</p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => {
            const captionId = `ugc-${reel.id}-caption`
            const descId = `ugc-${reel.id}-desc`
            return (
              <article key={reel.id} className="group relative h-[430px] min-w-[245px] snap-start overflow-hidden bg-velmora-linen shadow-soft md:h-[520px] md:min-w-[300px]">
                <span id={descId} className="sr-only">{reel.desc}</span>
                <img
                  alt={reel.caption}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${descId}] [${captionId}] [ugc-subtitle] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="700"
                  src={imageFallback}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velmora-ink/80 to-transparent p-5 pt-24">
                  <p id={captionId} className="font-serif text-2xl leading-tight text-velmora-cream">{reel.caption}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
