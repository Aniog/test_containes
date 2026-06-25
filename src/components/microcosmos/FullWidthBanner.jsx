import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const FullWidthBanner = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="banner-bg-f4g5h6"
        data-strk-bg="[banner-title] [banner-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 id="banner-title" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Every Cell Tells a Story
        </h2>
        <p id="banner-subtitle" className="text-lg md:text-xl text-slate-200 max-w-xl">
          Billions of years of evolution captured in a single frame through the microscope lens
        </p>
      </div>
    </section>
  )
}

export default FullWidthBanner
