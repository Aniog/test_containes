const reels = [
  { id: 'morning-gold', caption: 'Morning gold, softly layered', titleId: 'reel-morning-gold-title', imgId: 'reel-morning-gold-img-6a41ce' },
  { id: 'date-night', caption: 'A little shimmer after dark', titleId: 'reel-date-night-title', imgId: 'reel-date-night-img-a2d845' },
  { id: 'gift-moment', caption: 'Gifted, opened, immediately worn', titleId: 'reel-gift-moment-title', imgId: 'reel-gift-moment-img-90eb13' },
  { id: 'ear-stack', caption: 'The polished everyday ear stack', titleId: 'reel-ear-stack-title', imgId: 'reel-ear-stack-img-c8f721' },
  { id: 'neckline', caption: 'A quiet glint at the neckline', titleId: 'reel-neckline-title', imgId: 'reel-neckline-img-e4a690' },
]

export default function UgcReels() {
  return (
    <section className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Seen on you</p>
            <h2 id="reels-section-title" className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Velmora in Motion</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-7 text-velmora-taupe md:block">A reel-style strip of intimate jewelry moments in warm light.</p>
        </div>
        <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-4">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative aspect-[9/16] w-[72vw] max-w-[280px] shrink-0 snap-start overflow-hidden bg-velmora-champagne shadow-soft sm:w-[260px]">
              <div
                aria-label={reel.caption}
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                role="img"
                data-strk-bg-id={reel.imgId}
                data-strk-bg={`[${reel.titleId}] [reels-section-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
              <p id={reel.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-velmora-ivory">{reel.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
