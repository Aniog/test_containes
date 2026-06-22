import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const FullWidthSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-0">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="fullwidth-bg-l2m3n4"
          data-strk-bg="[fullwidth-subtitle] [fullwidth-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h2 id="fullwidth-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
              Billions of Worlds Within a Single Drop
            </h2>
            <p id="fullwidth-subtitle" className="text-slate-300 text-lg md:text-xl">
              A single milliliter of seawater contains approximately 10 million viruses, one million bacteria, and thousands of microscopic plankton organisms
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullWidthSection
