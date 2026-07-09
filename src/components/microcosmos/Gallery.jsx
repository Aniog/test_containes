import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { gallery } from './data'

export default function Gallery() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="gallery" ref={containerRef} className="bg-[#0a0f14] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#4ade80]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4ade80]">
              Image Gallery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#e8eef4] mb-4">
            Patterns of the Unseen
          </h2>
          <p className="text-lg text-[#8a9aab] leading-relaxed">
            A close-up collection of structures that reveal the artistry hidden
            in everyday matter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <figure
              key={g.id}
              className="group relative rounded-xl overflow-hidden border border-[#1f2c3a] aspect-square"
            >
              <img
                alt={g.title}
                data-strk-img-id={g.imgId}
                data-strk-img={`[${g.descId}] [${g.titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-[#0a0f14] via-[#0a0f14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 id={g.titleId} className="text-sm font-bold text-[#e8eef4]">
                  {g.title}
                </h3>
                <p id={g.descId} className="mt-1 text-xs text-[#cbd5e1] leading-snug">
                  {g.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
