const reels = [
  {
    id: 'morning-gold',
    caption: 'Morning gold, softly stacked',
    note: 'Golden huggies and ear cuff worn with cream silk',
  },
  {
    id: 'gift-unboxing',
    caption: 'A box worth keeping',
    note: 'Gift boxed gold jewelry set unboxing on neutral linen',
  },
  {
    id: 'necklace-glow',
    caption: 'Just enough color',
    note: 'Floral crystal gold necklace on collarbone warm light',
  },
  {
    id: 'dinner-drops',
    caption: 'Dinner light, heirloom detail',
    note: 'Gold filigree drop earrings worn at evening dinner',
  },
  {
    id: 'desk-to-date',
    caption: 'Desk to date night',
    note: 'Chunky dome huggie earrings on model close up',
  },
]

export default function UgcReels() {
  return (
    <section className="bg-velmora-ink py-16 text-velmora-porcelain md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Worn by you</p>
            <h2 id="ugc-title" className="mt-3 font-serif text-5xl leading-none text-velmora-porcelain md:text-6xl">
              Velmora in Motion
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-7 text-velmora-sand md:block">
            A reel-style glimpse of everyday shine, layered for real life.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-3">
        <div className="mx-auto flex max-w-7xl snap-x gap-4 px-5 sm:px-8 lg:px-10">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-velmora-espresso text-velmora-porcelain shadow-soft sm:w-64">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                data-strk-bg-id={`ugc-reel-${reel.id}-b7f4a9`}
                data-strk-bg={`[ugc-note-${reel.id}] [ugc-caption-${reel.id}] [ugc-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="500"
                role="img"
                aria-label={reel.caption}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/75 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p id={`ugc-caption-${reel.id}`} className="font-serif text-2xl leading-6 text-velmora-porcelain">
                  {reel.caption}
                </p>
                <p id={`ugc-note-${reel.id}`} className="sr-only">{reel.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
