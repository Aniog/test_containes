import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const DropOfWater = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-cosmos-border">
          {/* Background image */}
          <div
            className="aspect-[21/9] md:aspect-[3/1]"
            data-strk-bg-id="drop-water-bg-j6c8k3"
            data-strk-bg="[drop-subtitle] [drop-title] water drop microscopic life"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/95 via-cosmos-bg/70 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="max-w-lg">
              <h2 id="drop-title" className="text-3xl md:text-5xl font-bold text-cosmos-text mb-4 leading-tight">
                A World in <br />
                <span className="text-cosmos-primary">Every Drop</span>
              </h2>
              <p id="drop-subtitle" className="text-cosmos-muted text-base md:text-lg leading-relaxed mb-6">
                A single drop of pond water contains thousands of organisms -- paramecia swirling, amoebae extending pseudopods, and diatoms spinning like jewels. The microscopic universe is everywhere, waiting to be seen.
              </p>
              <a
                href="#gallery"
                className="inline-block px-6 py-3 bg-cosmos-primary text-cosmos-bg font-semibold rounded-full hover:bg-cosmos-primary/90 transition-colors text-sm"
              >
                Explore the Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DropOfWater
