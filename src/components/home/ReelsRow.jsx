import { Play } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'

const reels = [
  {
    id: 'reel-1',
    caption: 'Everyday gold essentials',
  },
  {
    id: 'reel-2',
    caption: 'Layering made effortless',
  },
  {
    id: 'reel-3',
    caption: 'Gift-worthy moments',
  },
  {
    id: 'reel-4',
    caption: 'Minimal, modern, yours',
  },
  {
    id: 'reel-5',
    caption: 'From desk to dinner',
  },
]

export default function ReelsRow() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="bg-velmora-base-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
            @velmorafinejewelry
          </p>
          <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">
            On the Feed
          </h2>
        </div>
      </div>

      <div className="reel-scroll flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-6 sm:px-6 lg:px-8">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative h-[360px] w-[210px] flex-shrink-0 overflow-hidden sm:h-[440px] sm:w-[260px]"
          >
            <img
              id={`${reel.id}-caption`}
              data-strk-img-id={reel.id}
              data-strk-img={`[${reel.id}-caption]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play size={20} className="ml-1 text-white" fill="white" />
              </div>
            </div>
            <p
              id={`${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg leading-snug text-velmora-ivory"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
