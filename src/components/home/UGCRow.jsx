import { useRef, useEffect } from 'react'
import { Play } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcPosts } from '@/data/products'

export function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              @velmorafinejewelry
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-white md:text-4xl">
              Worn by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-xs font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-gold-light md:block"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div
        ref={containerRef}
        className="ugc-scroll flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8"
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="group relative w-[160px] flex-shrink-0 snap-start md:w-[220px]"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-warm-gray/20">
              <img
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`[ugc-caption-${post.id}] velmora jewelry worn ear neck gold`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Play className="h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${post.id}`}
                  className="font-serif text-lg italic text-white"
                >
                  {post.caption}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/70">
                  {post.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
