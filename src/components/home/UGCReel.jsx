const reels = [
  { id: 'reel-1', caption: 'Everyday gold moments' },
  { id: 'reel-2', caption: 'Styled for brunch' },
  { id: 'reel-3', caption: 'Gift-ready layers' },
  { id: 'reel-4', caption: 'Minimal, but make it luxe' },
  { id: 'reel-5', caption: 'Huggies & hoops' },
  { id: 'reel-6', caption: 'Sunset sparkle' },
]

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text tracking-wide">
          Worn by You
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ width: 'max-content' }}>
          {reels.map((reel) => (
            <article
              key={reel.id}
              className="relative w-[190px] md:w-[230px] aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-velmora-text"
                data-strk-bg-id={`${reel.id}-bg`}
                data-strk-bg={`[${reel.id}-caption]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`${reel.id}-caption`}
                  className="font-serif text-lg md:text-xl text-white leading-snug"
                >
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
