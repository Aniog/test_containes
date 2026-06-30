import { useRef, useEffect } from 'react'
import { StrkImg } from '@/components/Image'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcItems } from '@/data/products'

export default function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-velmora-bg-alt" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-3">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block font-sans text-xs uppercase tracking-[0.16em] text-velmora-ink border-b border-velmora-ink pb-0.5 hover:text-velmora-accent hover:border-velmora-accent transition-colors"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 md:gap-5 px-4 sm:px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <article
              key={item.id}
              className="relative w-[190px] md:w-[240px] aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <StrkImg
                id={item.id}
                query={item.query}
                ratio="9x16"
                width={500}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-white italic leading-snug">
                {item.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
