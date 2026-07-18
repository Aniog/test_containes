import { useStrkImages } from '@/hooks/useStrkImages'

const REELS = [
  {
    id: 'reel-1',
    imgId: 'reel-1-img',
    titleId: 'reel-1-title',
    caption: 'Golden Sphere Huggies, all day.',
    handle: '@maya.k',
  },
  {
    id: 'reel-2',
    imgId: 'reel-2-img',
    titleId: 'reel-2-title',
    caption: 'The ear cuff that started it all.',
    handle: '@noor.styles',
  },
  {
    id: 'reel-3',
    imgId: 'reel-3-img',
    titleId: 'reel-3-title',
    caption: 'Florals, but make it gold.',
    handle: '@claire.b',
  },
  {
    id: 'reel-4',
    imgId: 'reel-4-img',
    titleId: 'reel-4-title',
    caption: 'Stacked and glowing.',
    handle: '@theo.w',
  },
  {
    id: 'reel-5',
    imgId: 'reel-5-img',
    titleId: 'reel-5-title',
    caption: 'Gift-boxed heirloom energy.',
    handle: '@sara.m',
  },
  {
    id: 'reel-6',
    imgId: 'reel-6-img',
    titleId: 'reel-6-title',
    caption: 'Lace filigree in motion.',
    handle: '@ines.d',
  },
]

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelStrip() {
  const containerRef = useStrkImages()

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-8xl px-6 md:px-10 mb-10">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
          #VelmoraOnYou
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink">Worn & Adored</h2>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-10 pb-2 snap-x snap-mandatory"
      >
        {REELS.map((reel) => (
          <article
            key={reel.id}
            className="relative shrink-0 w-[68vw] sm:w-[300px] aspect-[9/16] overflow-hidden bg-ink snap-start group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <p
                id={reel.titleId}
                className="font-serif text-cream text-xl leading-snug"
              >
                {reel.caption}
              </p>
              <p className="text-cream/70 text-xs mt-2 tracking-wide">{reel.handle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
