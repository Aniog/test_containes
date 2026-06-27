import { useStrkImages } from '@/components/StrkImage'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const REELS = [
  {
    id: 'reel-aura',
    caption: 'Vivid Aura, all day',
    handle: '@maya.wears',
    titleId: 'reel-aura-title',
    imgId: 'reel-aura-img-3f1a',
  },
  {
    id: 'reel-flora',
    caption: 'Florals, but make it gold',
    handle: '@noor.styles',
    titleId: 'reel-flora-title',
    imgId: 'reel-flora-img-7b2c',
  },
  {
    id: 'reel-sphere',
    caption: 'The huggies I never take off',
    handle: '@claire.e',
    titleId: 'reel-sphere-title',
    imgId: 'reel-sphere-img-9d4e',
  },
  {
    id: 'reel-lace',
    caption: 'Filigree that moves with you',
    handle: '@sofia.luxe',
    titleId: 'reel-lace-title',
    imgId: 'reel-lace-img-1c5f',
  },
  {
    id: 'reel-heirloom',
    caption: 'Gifted, treasured, repeated',
    handle: '@thea.gifts',
    titleId: 'reel-heirloom-title',
    imgId: 'reel-heirloom-img-6a8b',
  },
  {
    id: 'reel-stack',
    caption: 'The everyday ear stack',
    handle: '@ines.daily',
    titleId: 'reel-stack-title',
    imgId: 'reel-stack-img-2e7d',
  },
]

export default function UgcReels() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3 text-center">
          As Worn By You
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink text-center">
          #VelmoraMoments
        </h2>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-5 px-6 md:px-10 pb-2 snap-x snap-mandatory">
          {REELS.map((reel) => (
            <article
              key={reel.id}
              className="relative shrink-0 w-[68vw] sm:w-[280px] md:w-[300px] aspect-[9/16] overflow-hidden bg-ink snap-start group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on ear neck editorial vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p
                  id={reel.titleId}
                  className="font-serif text-ivory text-xl italic leading-snug"
                >
                  {reel.caption}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-champagne mt-2">
                  {reel.handle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
