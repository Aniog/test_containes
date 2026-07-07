import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const clips = [
  { id: 'ugc-1', caption: 'Effortless glow', query: 'gold huggies ear close up' },
  { id: 'ugc-2', caption: 'Layered in light', query: 'gold necklaces layered editorial' },
  { id: 'ugc-3', caption: 'Daily ritual', query: 'gold earrings woman portrait warm light' },
  { id: 'ugc-4', caption: 'Gifted moments', query: 'gold jewelry gift box' },
  { id: 'ugc-5', caption: 'Quiet luxury', query: 'minimal gold jewelry on model' },
  { id: 'ugc-6', caption: 'Treasured', query: 'gold ear cuff crystal close up' },
]

export default function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-stone">
              @velmorajewelry
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              Styled by You
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs uppercase tracking-widest text-stone hover:text-ink md:block link-underline"
          >
            Follow along
          </a>
        </div>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 md:px-6 lg:px-8">
        {clips.map((clip) => (
          <div
            key={clip.id}
            className="group relative aspect-[9/16] w-[180px] flex-shrink-0 overflow-hidden rounded-sm bg-ink md:w-[220px]"
          >
            <img
              data-strk-img-id={`ugc-${clip.id}`}
              data-strk-img={`[ugc-caption-${clip.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={clip.caption}
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${clip.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic text-warm-white"
            >
              {clip.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
