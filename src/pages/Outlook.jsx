import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Outlook() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Full-viewport image */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="outlook-hero-bg-g7h8i9"
          data-strk-bg="[outlook-desc] [outlook-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        />
        {/* Heavy vignette */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(26,36,33,0.7)_100%)]" />

        {/* Minimal text overlay */}
        <div className="relative z-20 text-center px-6 max-w-2xl">
          <h1
            id="outlook-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-8"
          >
            The Outlook
          </h1>
          <p
            id="outlook-desc"
            className="font-body text-base md:text-lg text-canopy-mist-light leading-relaxed max-w-md mx-auto"
          >
            Above the canopy, the world falls silent. A single wide-angle view from the forest crown — light, air, and the top of the trees.
          </p>
        </div>
      </section>

      {/* Single text block below */}
      <section className="max-w-lg mx-auto px-6 py-24 md:py-32 text-center">
        <p className="font-display text-2xl md:text-3xl text-canopy-mist italic leading-relaxed">
          From above, the canopy is an unbroken sea of green — a reminder that the forest is larger than any single tree.
        </p>
      </section>
    </div>
  )
}