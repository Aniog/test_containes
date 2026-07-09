import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { habitats } from './data'

export default function Habitats() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="habitats" ref={containerRef} className="bg-[#0d141c] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#22d3ee]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#22d3ee]">
              Where to Look
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#e8eef4] mb-4">
            Worlds Within Worlds
          </h2>
          <p className="text-lg text-[#8a9aab] leading-relaxed">
            The micro-world is not far away. It lives in a drop of water, a
            pinch of soil, even on the back of your hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {habitats.map((h) => (
            <article
              key={h.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1f2c3a] min-h-[320px] flex items-end"
            >
              <img
                alt={h.title}
                data-strk-img-id={h.imgId}
                data-strk-img={`[${h.descId}] [${h.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f14] via-[#0a0f14]/50 to-transparent" />
              <div className="relative z-10 p-7">
                <h3 id={h.titleId} className="text-2xl font-bold text-[#e8eef4]">
                  {h.title}
                </h3>
                <p id={h.descId} className="mt-2 text-sm text-[#cbd5e1] leading-relaxed max-w-md">
                  {h.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
