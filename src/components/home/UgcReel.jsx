const reelItems = [
  {
    id: 'golden-hour-stack',
    caption: 'Golden hour stack',
    titleId: 'reel-golden-hour-title',
    bgId: 'reel-golden-hour-bg-11b0a4',
  },
  {
    id: 'soft-neckline',
    caption: 'Soft neckline shimmer',
    titleId: 'reel-soft-neckline-title',
    bgId: 'reel-soft-neckline-bg-2e54bf',
  },
  {
    id: 'weekend-huggies',
    caption: 'Weekend huggies',
    titleId: 'reel-weekend-huggies-title',
    bgId: 'reel-weekend-huggies-bg-8d9a20',
  },
  {
    id: 'gift-unboxing',
    caption: 'A little velvet box',
    titleId: 'reel-gift-unboxing-title',
    bgId: 'reel-gift-unboxing-bg-99fd30',
  },
  {
    id: 'quiet-sparkle',
    caption: 'Quiet sparkle, daily',
    titleId: 'reel-quiet-sparkle-title',
    bgId: 'reel-quiet-sparkle-bg-62acde',
  },
]

export default function UgcReel() {
  return (
    <section id="journal" className="bg-velmora-ink py-16 text-velmora-pearl md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-gold">As worn</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-medium text-velmora-pearl md:text-6xl">Golden in Motion</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-champagne">
            A reel-style glimpse of the pieces styled for mornings, dinners, and everything in between.
          </p>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#B08D57_transparent]">
          {reelItems.map((item) => (
            <article key={item.id} className="relative h-[420px] min-w-[235px] snap-start overflow-hidden bg-velmora-espresso shadow-soft sm:min-w-[280px]">
              <div
                className="absolute inset-0"
                data-strk-bg-id={item.bgId}
                data-strk-bg={`[${item.titleId}] [reel-section-context]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p id={item.titleId} className="font-serifDisplay text-3xl leading-8 text-velmora-pearl">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p id="reel-section-context" className="sr-only">Velmora gold jewelry worn on ear and neck in warm editorial light</p>
      </div>
    </section>
  )
}
