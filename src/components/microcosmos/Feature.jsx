import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Quote } from 'lucide-react'

export default function Feature() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#0d141c] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-[#1f2c3a] aspect-[4x3]">
            <img
              alt="Microscopic life magnified"
              data-strk-img-id="feature-main-3c8d1e"
              data-strk-img="[feature-body] [feature-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-[#22d3ee]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#22d3ee]">
                Why It Matters
              </span>
            </div>
            <h2 id="feature-title" className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#e8eef4] mb-6">
              The Small Runs the World
            </h2>
            <p id="feature-body" className="text-lg text-[#8a9aab] leading-relaxed mb-6">
              Microbes invented photosynthesis, built the oxygen we breathe, and
              recycle every leaf that falls. To look through a microscope is to
              meet the engineers of the planet, the original life forms whose
              four billion years of chemistry made everything else possible.
            </p>

            <div className="relative pl-8 border-l-2 border-[#4ade80]/40">
              <Quote className="absolute -left-3 top-0 w-6 h-6 text-[#4ade80] bg-[#0d141c] p-1 rounded-full" />
              <p className="text-lg italic text-[#cbd5e1] leading-relaxed">
                We live on a microbial planet. The large creatures, including
                ourselves, are latecomers in a world they built.
              </p>
              <p className="mt-3 text-sm text-[#8a9aab] tracking-wide">
                A reminder from the deep history of life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
