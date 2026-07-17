import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const BannerSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="banner-bg-5c9a2e"
        data-strk-bg="[banner-subtitle] [banner-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-deep-dark/60" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 id="banner-title" className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
          Every Drop of Water Is a Universe
        </h2>
        <p id="banner-subtitle" className="text-lg md:text-xl font-light text-text-secondary max-w-2xl mx-auto">
          In a single milliliter of seawater, over one million bacteria and ten million viruses coexist in an intricate web of life
        </p>
      </div>
    </section>
  )
}

export default BannerSection
