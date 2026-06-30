import React from 'react'
import { reels } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ReelStrip() {
  const containerRef = useStrkImages([])

  return (
    <section className="bg-cream-warm py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">As Worn By You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso-800">The Velmora Edit</h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-5 md:px-12 pb-4 snap-x snap-mandatory"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[260px] md:w-[300px] aspect-[9/16] snap-start overflow-hidden bg-espresso-800 group"
          >
            <img
              src={PLACEHOLDER}
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[reel-caption-${reel.id}] gold jewelry worn editorial vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-0 left-0 right-0 p-5 font-serif text-cream text-lg leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
