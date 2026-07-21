import { useImageLoader } from '@/hooks/useImageLoader'
import { ResponsiveImage } from '@/components/ui/ResponsiveImage'

const reels = [
  { id: 'reel-1', caption: 'Golden Hour Layers', query: 'woman wearing gold layered necklaces close up editorial' },
  { id: 'reel-2', caption: 'Everyday Elegance', query: 'gold hoop huggie earrings on ear close up jewelry' },
  { id: 'reel-3', caption: 'Soft Sparkle', query: 'crystal ear cuff gold jewelry on ear editorial' },
  { id: 'reel-4', caption: 'Gift Ready', query: 'gold jewelry gift box unboxing elegant' },
  { id: 'reel-5', caption: 'Layered Fine', query: 'model wearing gold necklace and earrings editorial portrait' },
  { id: 'reel-6', caption: 'Quiet Luxury', query: 'gold ring and bracelet close up on hand editorial jewelry' },
]

export function UgcReelSection() {
  const containerRef = useImageLoader([])

  return (
    <section ref={containerRef} className="bg-cream-dark py-14 sm:py-20">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">@velmorafinejewelry</p>
            <h2 className="mt-2 font-serif text-3xl tracking-wide text-espresso sm:text-4xl">
              Styled by You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs font-medium uppercase tracking-[0.15em] text-taupe transition-colors hover:text-gold sm:block"
          >
            Follow Along
          </a>
        </div>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-5 sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden bg-espresso sm:w-[260px]"
          >
            <ResponsiveImage
              imgId={`ugc-${reel.id}`}
              query={reel.query}
              ratio="9x16"
              width={400}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-serif text-xl italic text-cream-light">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
