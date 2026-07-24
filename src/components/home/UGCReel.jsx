import { useImageLoader } from '@/hooks/useImageLoader'

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'gold huggie earrings on ear close up warm light' },
  { id: 'reel-2', caption: 'Layered moments', query: 'delicate gold necklace layered on neck editorial' },
  { id: 'reel-3', caption: 'Gift ready', query: 'gold jewelry gift box ribbon elegant' },
  { id: 'reel-4', caption: 'Soft glow', query: 'gold ear cuff crystal on ear portrait' },
  { id: 'reel-5', caption: 'Vintage lace', query: 'gold filigree earrings worn close up' },
  { id: 'reel-6', caption: 'Treasured', query: 'woman hand gold ring necklace detail' },
]

export default function UGCReel() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Styled by You
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide sm:gap-5 sm:px-6 lg:px-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[9/16] w-[180px] flex-shrink-0 overflow-hidden rounded-xl sm:w-[220px]"
            >
              <img
                data-strk-img={`[${reel.id}-caption]`}
                data-strk-img-id={`reel-${reel.id}`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <span id={`${reel.id}-caption`} className="sr-only" aria-hidden="true">{reel.query}</span>
              <p className="absolute bottom-5 left-5 right-5 font-serif text-lg italic text-white">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
