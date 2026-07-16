import { useEffect, useRef } from 'react'
import { ugcReels } from '@/data/products'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function UGCRow() {
  const scrollRef = useRef(null)
  const sectionRef = useScrollReveal([])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="section-subtitle" data-reveal>As Seen On You</p>
          <h2 className="section-title mt-2" data-reveal>Wear It Your Way</h2>
        </div>

        {/* Horizontal scroll reel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-40 md:w-52 group cursor-pointer"
            >
              <div className="aspect-[9/16] rounded-sm overflow-hidden bg-midnight-100 relative">
                <img
                  src={reel.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-serif italic leading-snug">
                    {reel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}