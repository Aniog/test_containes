import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { specimens } from './data'

export default function Specimens() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="specimens" ref={containerRef} className="bg-[#0a0f14] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#4ade80]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4ade80]">
              Field Guide
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#e8eef4] mb-4">
            Meet the Residents
          </h2>
          <p className="text-lg text-[#8a9aab] leading-relaxed">
            Six organisms you could find today in a jar of pond water, each a
            complete life form smaller than a grain of sand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specimens.map((s) => (
            <article
              key={s.id}
              className="group rounded-2xl overflow-hidden border border-[#1f2c3a] bg-[#111922] hover:border-[#4ade80]/40 transition-colors duration-500"
            >
              <div className="relative overflow-hidden aspect-[4x3]">
                <img
                  alt={s.title}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[${s.descId}] [${s.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0a0f14]/80 backdrop-blur-sm border border-[#1f2c3a] text-[10px] font-semibold tracking-wider uppercase text-[#22d3ee]">
                  {s.scale}
                </div>
              </div>
              <div className="p-6">
                <h3 id={s.titleId} className="text-xl font-bold text-[#e8eef4]">
                  {s.title}
                </h3>
                <p className="text-sm italic text-[#4ade80] mt-1">{s.latin}</p>
                <p id={s.descId} className="mt-3 text-sm text-[#8a9aab] leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-[#1f2c3a] flex items-center justify-between text-xs text-[#8a9aab]">
                  <span className="uppercase tracking-wider">Habitat</span>
                  <span className="text-[#cbd5e1]">{s.habitat}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
