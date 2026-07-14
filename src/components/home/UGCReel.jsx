import { imagePlaceholder } from '@/lib/imagePlaceholder'

const reels = [
  { id: 'morning-stack', caption: 'The morning gold stack' },
  { id: 'soft-dinner', caption: 'Soft shine for dinner plans' },
  { id: 'neckline-glow', caption: 'A neckline made luminous' },
  { id: 'gift-unboxed', caption: 'Unboxed, adored, worn daily' },
  { id: 'weekend-huggies', caption: 'Weekend huggies on repeat' },
]

const UGCReel = () => (
  <section id="journal" className="bg-velmora-espresso py-16 text-velmora-ivory lg:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-champagne">Seen on Velmora</p>
          <h2 id="ugc-title" className="mt-3 font-serif text-5xl font-medium text-velmora-ivory">Editorial moments</h2>
        </div>
        <p id="ugc-subtitle" className="max-w-sm text-sm leading-7 text-velmora-ivory/70">A reel-style glimpse into the pieces our customers reach for first.</p>
      </div>
      <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
        {reels.map((reel) => {
          const captionId = `reel-${reel.id}-caption`
          return (
            <article key={reel.id} className="group relative aspect-[9/16] w-[72vw] max-w-[260px] shrink-0 snap-start overflow-hidden bg-velmora-ink shadow-editorial sm:w-[260px]">
              <img
                className="h-full w-full object-cover opacity-92 transition duration-700 group-hover:scale-105"
                alt={reel.caption}
                data-strk-img-id={`reel-${reel.id}-image`}
                data-strk-img={`[${captionId}] [ugc-subtitle] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={imagePlaceholder}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/78 via-transparent to-transparent" />
              <p id={captionId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl font-medium leading-tight text-velmora-ivory">
                {reel.caption}
              </p>
            </article>
          )
        })}
      </div>
    </div>
  </section>
)

export default UGCReel
