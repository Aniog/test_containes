import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const reels = [
  { caption: 'Layered gold, everyday', subtitle: '@isabel.m' },
  { caption: 'The perfect ear stack', subtitle: '@camille.r' },
  { caption: 'Date night glow', subtitle: '@zara.k' },
  { caption: 'Morning light hits different', subtitle: '@naomi.w' },
  { caption: 'Gold never felt this light', subtitle: '@lucia.t' },
  { caption: 'Weekend uniform: gold only', subtitle: '@maya.j' },
]

export default function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[0.04em] text-rich-brown">
          Worn by You
        </h2>
        <div className="w-[40px] h-[1px] bg-gold mx-auto mt-4" />
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] bg-soft-sand rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`ugc-${i}-img`}
                data-strk-img={`[ugc-${i}-caption] gold jewelry on woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <span id={`ugc-${i}-caption`} className="hidden">{reel.caption}</span>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-warm-white italic tracking-[0.02em]">
                  {reel.caption}
                </p>
                <p className="text-[10px] text-gold-light/80 tracking-[0.08em] uppercase mt-1">
                  {reel.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
