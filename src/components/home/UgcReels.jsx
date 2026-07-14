import EditorialImage from '@/components/common/EditorialImage.jsx'

const reels = [
  { id: 'ear-stack', caption: 'A soft gold stack for dinner light', title: 'Gold ear stack' },
  { id: 'neck-layer', caption: 'Layered with silk, worn all week', title: 'Layered necklace' },
  { id: 'gift-moment', caption: 'A little heirloom in a ribboned box', title: 'Jewelry gift moment' },
  { id: 'huggie-close', caption: 'Huggies that feel quietly sculptural', title: 'Gold huggies close up' },
  { id: 'floral-necklace', caption: 'Florals with a barely-there shimmer', title: 'Floral crystal necklace' },
]

export default function UgcReels() {
  return (
    <section className="bg-velmora-ink py-20 text-velmora-cream lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">Seen in the moment</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-4xl font-semibold text-velmora-cream sm:text-5xl">
              Worn close, filmed softly.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-7 text-velmora-parchment/75 md:block">
            A reel-style glimpse of Velmora pieces catching skin, silk, and warm afternoon light.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
          {reels.map((reel) => {
            const titleId = `reel-${reel.id}-title`
            const captionId = `reel-${reel.id}-caption`

            return (
              <article key={reel.id} className="group relative aspect-[9/16] min-w-[220px] overflow-hidden bg-velmora-espresso sm:min-w-[260px]">
                <EditorialImage
                  id={`ugc-${reel.id}-img-c4`}
                  query={`[${captionId}] [${titleId}] [ugc-title]`}
                  ratio="9x16"
                  width="500"
                  alt={reel.title}
                  className="group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-velmora-cream">
                  <p id={titleId} className="text-[0.62rem] font-bold uppercase tracking-luxury text-velmora-champagne">
                    {reel.title}
                  </p>
                  <p id={captionId} className="mt-2 font-serif text-2xl leading-7">
                    {reel.caption}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
