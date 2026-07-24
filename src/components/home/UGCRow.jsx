import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function UGCRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const ugcItems = [
    { id: 'ugc-1', caption: 'Everyday elegance ✨', quote: 'These earrings are my new obsession!' },
    { id: 'ugc-2', caption: 'Date night ready 💫', quote: 'Received so many compliments!' },
    { id: 'ugc-3', caption: 'Gift goals 🎁', quote: 'Perfect present for my sister.' },
    { id: 'ugc-4', caption: 'Stacking perfection 💎', quote: 'Love how they layer together.' },
    { id: 'ugc-5', caption: 'Weekend vibes ☀️', quote: 'So lightweight, I forget I\'m wearing them.' },
  ]

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-secondary/30">
      <div className="container-padding">
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-10">
          As Worn By You
        </h2>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 snap-start"
            >
              <div className="relative aspect-[9/16] bg-muted rounded-lg overflow-hidden mb-2 md:mb-3">
                <img
                  data-strk-img-id={`${item.id}-img`}
                  data-strk-img={`[${item.id}-caption] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p id={`${item.id}-caption`} className="text-white text-[10px] md:text-xs tracking-wider">
                    {item.caption}
                  </p>
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground italic text-center leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
