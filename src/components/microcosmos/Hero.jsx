import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-microscopy-bg-a7f3d2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-cosmos-primary border border-cosmos-primary/30 rounded-full bg-cosmos-primary/10">
            Exploring the Invisible
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-cosmos-text"
        >
          The <span className="text-cosmos-primary">Micro</span>
          <br />
          Cosmos
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-cosmos-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into a hidden universe teeming with life invisible to the naked eye.
          From ancient bacteria to intricate cells, discover the extraordinary world beneath our vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-3.5 bg-cosmos-primary text-cosmos-bg font-semibold rounded-full hover:bg-cosmos-primary/90 transition-colors text-sm tracking-wide"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-3.5 border border-cosmos-border text-cosmos-text font-semibold rounded-full hover:border-cosmos-primary/50 hover:text-cosmos-primary transition-colors text-sm tracking-wide"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cosmos-muted" />
      </div>
    </section>
  )
}

export default Hero
