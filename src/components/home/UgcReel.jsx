import { useRef } from 'react'
import { UGC_POSTS } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export function UgcReel() {
  const containerRef = useRef(null)
  useStrkImages(containerRef)

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-vel mb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-vel-accent">
          @velmorafine
        </p>
        <h2 id="ugc-section-title" className="heading-serif text-3xl md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:gap-5 md:px-8 snap-x snap-mandatory">
        {UGC_POSTS.map((post) => {
          const captionId = `ugc-caption-${post.id}`
          const handleId = `ugc-handle-${post.id}`
          return (
            <div
              key={post.id}
              className="relative aspect-[9/16] w-[260px] flex-shrink-0 snap-start overflow-hidden bg-vel-base md:w-[300px]"
            >
              <div
                data-strk-bg-id={`ugc-bg-${post.id}`}
                data-strk-bg={`[${captionId}] [${handleId}] [ugc-section-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="500"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vel-base/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <p id={captionId} className="font-serif text-lg font-light italic">
                  {post.caption}
                </p>
                <p id={handleId} className="mt-2 text-xs font-medium uppercase tracking-wide text-white/70">
                  {post.handle}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
