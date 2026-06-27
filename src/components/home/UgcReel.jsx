import { useImageLoader } from '@/hooks/useImageLoader'

const REELS = [
  {
    id: 'reel-1',
    imgId: 'reel-img-1a2b3c',
    caption: 'Layered in gold',
    titleId: 'reel-title-1',
  },
  {
    id: 'reel-2',
    imgId: 'reel-img-2b3c4d',
    caption: 'Everyday sparkle',
    titleId: 'reel-title-2',
  },
  {
    id: 'reel-3',
    imgId: 'reel-img-3c4d5e',
    caption: 'Gift-worthy moments',
    titleId: 'reel-title-3',
  },
  {
    id: 'reel-4',
    imgId: 'reel-img-4d5e6f',
    caption: 'Quiet luxury',
    titleId: 'reel-title-4',
  },
  {
    id: 'reel-5',
    imgId: 'reel-img-5e6f7a',
    caption: 'Treasured details',
    titleId: 'reel-title-5',
  },
  {
    id: 'reel-6',
    imgId: 'reel-img-6f7a8b',
    caption: 'Made to mix',
    titleId: 'reel-title-6',
  },
]

export default function UgcReel() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="py-14 md:py-20 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso">
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[150px] md:w-[180px] aspect-[9/16] overflow-hidden group"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-cream text-sm md:text-base italic"
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
