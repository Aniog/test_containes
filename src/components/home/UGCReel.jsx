import { UGC_REELS } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function UGCReel() {
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream border-y border-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <p className="text-xs font-sans uppercase tracking-ui text-gold mb-2">
          @velmorajewelry
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-espresso">
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:gap-5 px-4 sm:px-6 lg:px-8 pb-2">
          {UGC_REELS.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden group"
            >
              <div
                data-strk-bg-id={reel.imgId}
                data-strk-bg={`[${reel.id}-caption]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="500"
                className="absolute inset-0 bg-charcoal transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={`${reel.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-cream leading-snug"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
